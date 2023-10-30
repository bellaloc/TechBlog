import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'mysql', // Replace with your database type (e.g., 'mysql', 'postgres', 'sqlite', 'mssql', etc.)
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export default sequelize;
