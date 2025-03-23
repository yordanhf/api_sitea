import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class VinculoInstitucional extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

VinculoInstitucional.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default VinculoInstitucional;
