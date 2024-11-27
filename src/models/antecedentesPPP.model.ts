// src/models/caracteristica.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class AntecedentesPPP extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

AntecedentesPPP.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AntecedentesPPP',
    tableName: 'AntecedentesPPPs',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default AntecedentesPPP;
