// src/models/interconsultas.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class InterconsultaSimple extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

InterconsultaSimple.init(
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
  },
  {
    sequelize,
    modelName: 'InterconsultaSimple',
    tableName: 'Interconsultas',
    timestamps: false,
  }
);

export default InterconsultaSimple;
