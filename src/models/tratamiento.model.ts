// src/models/tratamiento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Medicamento from './medicamento.model';

class Tratamiento extends Model {
  public id!: number;
  public pacienteId!: number; // Foreign key
  public medicamentoId!: number; // Foreign key  
}

Tratamiento.init(
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
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },  
  },
  {
    sequelize,
    modelName: 'Tratamiento',
    tableName: 'Tratamiento',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'medicamentoId'],
      },
    ],
  }
);



export default Tratamiento;
