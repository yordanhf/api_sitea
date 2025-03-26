import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import bcrypt from 'bcryptjs';


class Usuario extends Model {
  public id!: string;
  public nombre!: string;  
  public password!: string;
  public preguntaSeguridad!: string; 
  public respuestaSeguridad!: string;
  public rol!: string;
  public provincia?: string;
}

Usuario.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    preguntaSeguridad: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    respuestaSeguridad: {
      type: DataTypes.STRING,
      allowNull: false, 
    },    
    rol: {
      type: DataTypes.ENUM('admin_nac', 'admin_prov', 'usuario'),
      allowNull: false,
    },
    provincia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'Usuarios',
    timestamps: false,   
    hooks: {
        // Hook para encriptar la contraseña antes de guardar
        beforeCreate: async (usuario) => {
          const salt = await bcrypt.genSalt(10);
          usuario.password = await bcrypt.hash(usuario.password, salt);
          usuario.preguntaSeguridad = await bcrypt.hash(usuario.preguntaSeguridad, salt);
          usuario.respuestaSeguridad = await bcrypt.hash(usuario.respuestaSeguridad, salt);
        },
        // También se puede encriptar antes de actualizar si es necesario

        beforeUpdate: async (usuario) => {
          if (usuario.changed('password')) {
            const salt = await bcrypt.genSalt(10);
            usuario.password = await bcrypt.hash(usuario.password, salt);            
          }
        },
      }, 
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Usuario;
