// src/models/fortaleza.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Provincia extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

Provincia.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Provincia',
    tableName: 'Provincia',
    timestamps: false,
  }
);

export default Provincia;
