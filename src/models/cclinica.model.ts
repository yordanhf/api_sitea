// src/models/cclinica.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class CClinica extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

CClinica.init(
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
    modelName: 'CClinica',
    tableName: 'CClinicas',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default CClinica;
