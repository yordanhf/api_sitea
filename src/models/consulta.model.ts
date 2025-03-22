// src/models/medicamento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';

class Consulta extends Model {
  public id!: string;
  public pacienteId!: string;
  public fecha!: string;
  public peso?: number;
  public talla?: number;
  public examenFisicoPositivo?: string;
  public observaciones?: string;
  public indicaciones?: string;
}

Consulta.init(
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
      fecha: {
        type: DataTypes.DATEONLY,        
        allowNull: false,
      },
      peso: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      talla: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      examenFisicoPositivo: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      observaciones: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      indicaciones: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

  },
  {
    sequelize,
    modelName: 'Consulta',
    tableName: 'Consultas',
    timestamps: false, 
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'fecha'],
      },
    ],
  }
);

export default Consulta;
