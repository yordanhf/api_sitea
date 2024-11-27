// src/models/examenes_complementarios.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';

class ExamenComplementario extends Model {
  public id!: number; // Auto-incremental
  public pacienteId!: number; // Foreign key
  public nombre!: string;
  public fecha!: string;
  public resultado?: string;
}

ExamenComplementario.init(
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
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    fecha: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    resultado: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'ExamenComplementario',
    tableName: 'ExamenComplementario',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['pacienteId', 'nombre'],
      },
    ],
  }
);

export default ExamenComplementario;

