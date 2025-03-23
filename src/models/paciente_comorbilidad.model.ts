// src/models/paciente_cclinicas.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Comorbilidad from './comorbilidad.model';

class PacienteComorbilidad extends Model {
  public id!: string;
  public pacienteId!: string; // Foreign key
  public comorbilidadId!: string; // Foreign key
}

PacienteComorbilidad.init(
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
    comorbilidadId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Comorbilidad,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'PacienteComorbilidad',
    tableName: 'Paciente_Comorbilidad',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'comorbilidadId'],
      },
    ],
  }
);


export default PacienteComorbilidad;
