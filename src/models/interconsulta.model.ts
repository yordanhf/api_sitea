// src/models/interconsulta.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import InterconsultaSimple from './interconsultas.model';

class Interconsulta extends Model {
  public id!: string; // GUID
  public pacienteId!: string; // Foreign key
  public interconsultaId!: string;
  public diagnostico?: string;
}

Interconsulta.init(
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
    interconsultaId: {
      type: DataTypes.UUID,
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
