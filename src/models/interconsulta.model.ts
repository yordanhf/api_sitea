// src/models/interconsulta.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';

class Interconsulta extends Model {
  public id!: number; // Auto-incremental
  public pacienteId!: number; // Foreign key
  public nombre!: string;
  public diagnostico?: string;
}

Interconsulta.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pacienteId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Paciente,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    diagnostico: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Interconsulta',
    tableName: 'Interconsulta',
    timestamps: false,
  }
);


export default Interconsulta;
