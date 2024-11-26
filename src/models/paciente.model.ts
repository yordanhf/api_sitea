// src/models/paciente.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Paciente extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
  public apellidos!: string;
  public ci!: string;
  public sexo!: string;
  public raza!: string;
  public direccion!: string;
  public municipio!: string;
  public verbal!: string;
  public motivoConsulta?: string;
  public diagnostico?: string;
  public comorbilidad?: string;
  public terapia?: string;
  public descripcionTerapia?: string;
  public observaciones?: string;
  public telefono?: string;
  public provincia!: string;
  public vinculoInstitucional?: string;
  public antecPatFam?: string;
  public historialTratamiento?: string;
  public historialAlergia?: string;
}

Paciente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    ci: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING(9),
      allowNull: false,
    },
    raza: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    municipio: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    verbal: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    motivoConsulta: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    diagnostico: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    comorbilidad: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    terapia: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    descripcionTerapia: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    observaciones: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true,
    },
    provincia: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    vinculoInstitucional: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    antecPatFam: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    historialTratamiento: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    historialAlergia: {
      type: DataTypes.TEXT,
      allowNull: true,
    },    
  },
  {
    sequelize,
    modelName: 'Paciente',
    tableName: 'Pacientes',
    timestamps: false,
  }
);



export default Paciente;

