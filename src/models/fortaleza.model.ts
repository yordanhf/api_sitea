// src/models/fortaleza.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Fortaleza extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

Fortaleza.init(
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
    modelName: 'Fortaleza',
    tableName: 'Fortaleza',
    timestamps: false,        
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Fortaleza;
