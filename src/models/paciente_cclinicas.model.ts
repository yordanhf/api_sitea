// src/models/paciente_cclinicas.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import CClinica from './cclinica.model';

class PacienteCClinica extends Model {
  public id!: number;
  public pacienteId!: number; // Foreign key
  public cClinicaId!: number; // Foreign key
}

PacienteCClinica.init(
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
    cClinicaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: CClinica,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'PacienteCClinica',
    tableName: 'Paciente_CClinicas',
    timestamps: false,
  }
);


export default PacienteCClinica;
