import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import AntecedentesPPP from './antecedentesPPP.model';

class Paciente_Antecedente extends Model {
  public id!: string;
  public pacienteId!: string;
  public antecedenteId!: string;
  public descripcion?: string;
}

Paciente_Antecedente.init(
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
    antecedenteId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: AntecedentesPPP,
        key: 'id',
      },
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'Paciente_Antecedente',
    tableName: 'Paciente_Antecedentes',
    timestamps: false,
indexes: [
  {
    unique: true,
    fields: ['pacienteId', 'antecedenteId'],
  },
],
  }
);



export default Paciente_Antecedente;
