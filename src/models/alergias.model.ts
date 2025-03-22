import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Medicamento from './medicamento.model';

class Alergias extends Model {
  public id!: string;
  public pacienteId!: string;
  public medicamentoId!: string; 
}

Alergias.init(
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
    medicamentoId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Medicamento,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
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
