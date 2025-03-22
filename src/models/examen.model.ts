// src/models/examen.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class Examen extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

Examen.init(
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
    modelName: 'Examen',
    tableName: 'Examenes',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Examen;
