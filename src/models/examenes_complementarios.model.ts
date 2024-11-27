// src/models/examenes_complementarios.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Paciente from './paciente.model';
import Examen from './examen.model';

class ExamenComplementario extends Model {
  public id!: number; // Auto-incremental
  public pacienteId!: number; // Foreign key
  public examenId!: string;
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
    examenId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Examen,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    fecha: {
      type: DataTypes.DATEONLY,
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
        fields: ['pacienteId', 'examenId', 'fecha'],
      },
    ],
  }
);

export default ExamenComplementario;

