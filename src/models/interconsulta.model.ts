// src/models/interconsulta.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import InterconsultaSimple from './interconsultas.model';

class Interconsulta extends Model {
  public id!: number; // Auto-incremental
  public pacienteId!: number; // Foreign key
  public interconsultaId!: number;
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
    interconsultaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: InterconsultaSimple,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
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
        
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'interconsultaId'],
      },
    ],
  }
);


export default Interconsulta;
