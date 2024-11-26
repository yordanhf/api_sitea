import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import AntecedentesPPP from './antecedentesPPP.model';

class Paciente_Antecedente extends Model {
  public id!: number;
  public pacienteId!: number;
  public medicamentoId!: number;
  public descripcion?: string;
}

Paciente_Antecedente.init(
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
    antecedenteId: {
      type: DataTypes.INTEGER,
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
