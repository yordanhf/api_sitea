// src/models/interconsultas.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class InterconsultaSimple extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

InterconsultaSimple.init(
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
    modelName: 'InterconsultaSimple',
    tableName: 'Interconsultas',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default InterconsultaSimple;
