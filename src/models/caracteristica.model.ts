// src/models/caracteristica.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Caracteristica extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

Caracteristica.init(
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
    modelName: 'Caracteristica',
    tableName: 'Caracteristicas',
    timestamps: false,
  }
);

export default Caracteristica;
