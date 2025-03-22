// src/models/paciente_fortaleza.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Fortaleza from './fortaleza.model';

class PacienteFortaleza extends Model {
  public id!: string;
  public pacienteId!: string; // Foreign key
  public fortalezaId!: string; // Foreign key
}

PacienteFortaleza.init(
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
    fortalezaId: {
      type: DataTypes.UUID,
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
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'fortalezaId'],
      },
    ],
  }
);



export default PacienteFortaleza;
