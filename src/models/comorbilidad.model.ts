// src/models/comorbilidad.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Comorbilidad extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

Comorbilidad.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Comorbilidad',
    tableName: 'Comorbilidad',
    timestamps: false,
  }
);

export default Comorbilidad;
