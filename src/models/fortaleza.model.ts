// src/models/fortaleza.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Fortaleza extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

Fortaleza.init(
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
    modelName: 'Fortaleza',
    tableName: 'Fortaleza',
    timestamps: false,        
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Fortaleza;
