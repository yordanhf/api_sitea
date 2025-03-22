// src/models/diagnostico.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Diagnostico extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

Diagnostico.init(
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
    modelName: 'Diagnostico',
    tableName: 'Diagnostico',
    timestamps: false,    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Diagnostico;
