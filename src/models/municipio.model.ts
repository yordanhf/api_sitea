// src/models/medicamento.model.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';
import Provincia from './provincia.model';

class Municipio extends Model {
  public id!: number;
  public provinciaId!: number;
  public nombre!: string;
  
}

Municipio.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // ID auto-incremental
    },
    provinciaId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Provincia,
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
  },
  {
    sequelize,
    modelName: 'Municipio',
    tableName: 'Municipio',
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default Municipio;
