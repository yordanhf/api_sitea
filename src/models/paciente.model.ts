// src/models/paciente.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Diagnostico from './diagnostico.model';
import VinculoInstitucional from './vinculo_institucional.model';

class Paciente extends Model {
  public id!: string; // GUID
  public nombre!: string;
  public apellidos!: string;
  public ci!: string;
  public sexo!: string;
  public raza!: string;
  public direccion!: string;
  public provincia!: string;  
  public municipio!: string;  
  public verbal!: string;
  public diagnosticoId!: string;
  public vinculoInstitucionalId!: string;
  public fechaDiagnostico?: string;
  public edadDiagnostico?: number;
  public motivoConsulta?: string;  
  public terapia?: string;
  public descripcionTerapia?: string;
  public observaciones?: string;
  public telefono?: string;   
  public antecPatFam?: string;
  public historialTratamiento?: string;
  public historialAlergia?: string;
}

Paciente.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    provincia: {
      type: DataTypes.STRING(50),
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
    edadDiagnostico: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    diagnosticoId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Diagnostico,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },   
    fechaDiagnostico: {
      type: DataTypes.DATEONLY,
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
    vinculoInstitucionalId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: VinculoInstitucional,
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
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
    indexes: [
      {
        unique: true,
        fields: ['ci'],
      },
    ],
  }
);



export default Paciente;

