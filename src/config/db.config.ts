// src/config/db.config.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './data/database.sqlite', // Archivo de la base de datos SQLite
  logging: false, // Desactivar el logging
});

export default sequelize;
