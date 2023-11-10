const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  // If JAWSDB_URL is available (Heroku deployment), use it
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Otherwise, use local development database configuration
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: 'mysql',
      port: process.env.DB_PORT || 3306,
    }
  );
}

module.exports = sequelize;
