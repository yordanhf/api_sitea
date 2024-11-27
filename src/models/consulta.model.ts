// src/models/medicamento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';

class Consulta extends Model {
  public id!: number;
  public pacienteId!: number;
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
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // ID auto-incremental
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
    timestamps: false, // Desactiva createdAt y updatedAt
  }
);

export default Consulta;
