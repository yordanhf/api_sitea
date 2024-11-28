import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import bcrypt from 'bcryptjs';


class Usuario extends Model {
  public id!: number;
  public nombre!: string;  
  public password!: string;
}

Usuario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false, // La contraseña encriptada se almacenará aquí
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
          const salt = await bcrypt.genSalt(12);
          usuario.password = await bcrypt.hash(usuario.password, salt);
        },
        // También se puede encriptar antes de actualizar si es necesario
        beforeUpdate: async (usuario) => {
          if (usuario.changed('password')) {
            const salt = await bcrypt.genSalt(12);
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
