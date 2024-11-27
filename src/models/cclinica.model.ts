// src/models/cclinica.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class CClinica extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

CClinica.init(
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
    modelName: 'CClinica',
    tableName: 'CClinicas',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default CClinica;
