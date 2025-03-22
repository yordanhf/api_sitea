import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/db.config';

class AntecedentesPPP extends Model {
  public id!: string; // GUID
  public nombre!: string;
}

AntecedentesPPP.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    nombre: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'AntecedentesPPP',
    tableName: 'AntecedentesPPPs',
    timestamps: false,
    
    indexes: [
      {
        unique: true,
        fields: ['nombre'],
      },
    ],
  }
);

export default AntecedentesPPP;
