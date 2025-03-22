// src/models/tratamiento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Medicamento from './medicamento.model';

class Tratamiento extends Model {
  public id!: string;
  public pacienteId!: string; // Foreign key
  public medicamentoId!: string; // Foreign key  
}

Tratamiento.init(
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
