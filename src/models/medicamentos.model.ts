// src/models/medicamento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Medicamentos extends Model {
  public id!: number;
  public nombre!: string;
}

Medicamentos.init(
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
    modelName: 'Medicamentos',
    tableName: 'lista_medicamentos',
    timestamps: false, // Desactiva createdAt y updatedAt
  }
);

export default Medicamentos;
