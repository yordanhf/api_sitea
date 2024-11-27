// src/models/medicamento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Medicamento extends Model {
  public id!: number;
  public nombre!: string;
}

Medicamento.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // ID auto-incremental
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false, // El nombre es obligatorio
    },
  },
  {
    sequelize,
    modelName: 'Medicamento',
    tableName: 'medicamentos',
    timestamps: false, 
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Medicamento;
