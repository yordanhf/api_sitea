// src/models/paciente_fortaleza.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Fortaleza from './fortaleza.model';

class PacienteFortaleza extends Model {
  public id!: number;
  public pacienteId!: number; // Foreign key
  public fortalezaId!: number; // Foreign key
}

PacienteFortaleza.init(
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
    fortalezaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Fortaleza,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'PacienteFortaleza',
    tableName: 'Paciente_Fortaleza',
    timestamps: false,
  }
);



export default PacienteFortaleza;
