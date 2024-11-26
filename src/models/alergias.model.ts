import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Medicamento from './medicamento.model';

class Alergias extends Model {
  public id!: number;
  public pacienteId!: number;
  public medicamentoId!: number; 
}

Alergias.init(
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
    medicamentoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Medicamento,
        key: 'id',
      },
    },   
  },
  {
    sequelize,
    modelName: 'Alergias',
    tableName: 'Alergias',
    timestamps: false,
indexes: [
  {
    unique: true,
    fields: ['pacienteId', 'medicamentoId'],
  },
],
  }
);

export default Alergias;
