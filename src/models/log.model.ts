import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Log extends Model {
  public id!: string;
  public usuarioId!: string;
  public entidad!: string;
  public operacion!: string;
  public detalle!: string;
  public fecha!: Date;
}

Log.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    usuarioId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    entidad: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    operacion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    detalle: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'Log',
    tableName: 'Logs',
    timestamps: false,
  }
);

export default Log;