const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

let config;
if (process.env.NODE_ENV === 'production') {
  config = {
    dialect: 'mysql2',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  };
} else {
  const dbConfig = require(path.join(__dirname, '../config', 'config.json'))[env];
  config = {
    dialect: dbConfig.dialect,
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
  };
}

const sequelize = new Sequelize(config);

module.exports = sequelize;
