import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class VinculoInstitucional extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

VinculoInstitucional.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'VinculoInstitucional',
    tableName: 'VinculoInstitucional',
    timestamps: false,
  }
);

export default VinculoInstitucional;
