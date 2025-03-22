// src/models/medicamento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Medicamento extends Model {
  public id!: string;
  public nombre!: string;
}

Medicamento.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
