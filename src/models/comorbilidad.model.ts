// src/models/comorbilidad.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Comorbilidad extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

Comorbilidad.init(
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
    modelName: 'Comorbilidad',
    tableName: 'Comorbilidad',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Comorbilidad;
