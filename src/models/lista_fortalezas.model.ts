// src/models/fortalezas.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class listaFortaleza extends Model {
  public id!: number; // Auto-incremental
  public nombre!: string;
}

listaFortaleza.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'listaFortaleza',
    tableName: 'lista_fortaleza',
    timestamps: false,
  }
);

export default listaFortaleza;
