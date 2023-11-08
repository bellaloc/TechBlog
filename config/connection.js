const { Sequelize } = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {

  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {

  sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_localhost,
    username: process.env.DB_root,
    password: process.env.DB_Password,
    database: process.env.DB_techBlog,
    port: 3306,
  });
}

module.exports = sequelize;
