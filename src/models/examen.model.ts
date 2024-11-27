// src/models/examen.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Examen extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

Examen.init(
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
    modelName: 'Examen',
    tableName: 'Examenes',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Examen;
