// src/models/paciente_cclinicas.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import CClinica from './cclinica.model';

class PacienteCClinica extends Model {
  public id!: string;
  public pacienteId!: string; // Foreign key
  public cClinicaId!: string; // Foreign key
}

PacienteCClinica.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    pacienteId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Paciente,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    cClinicaId: {
      type: DataTypes.UUID,
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
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'cClinicaId'],
      },
    ],
  }
);


export default PacienteCClinica;
