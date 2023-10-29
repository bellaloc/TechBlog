'use strict';

// This file exports all of the model files in the models directory.

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

// Validate the use_env_variable property in the config object
if (!config.use_env_variable) {
  throw new Error('The use_env_variable property in the config object must not be null.');
}

// Validate the JAWSDB_URL environment variable
if (!process.env.JAWSDB_URL) {
  throw new Error('The JAWSDB_URL environment variable must not be null.');
}

// Validate the DB_NAME environment variable
if (!process.env.DB_NAME) {
  throw new Error('The DB_NAME environment variable must not be null.');
}

// Validate the DB_USER environment variable
if (!process.env.DB_USER) {
  throw new Error('The DB_USER environment variable must not be null.');
}

// Validate the DB_PASSWORD environment variable
if (!process.env.DB_PASSWORD) {
  throw new Error('The DB_PASSWORD environment variable must not be null.');
}

// Validate the DB_HOST environment variable
if (!process.env.DB_HOST) {
  throw new Error('The DB_HOST environment variable must not be null.');
}

// Validate the DB_PORT environment variable
if (!process.env.DB_PORT) {
  throw new Error('The DB_PORT environment variable must not be null.');
}

// Create a new Sequelize instance
sequelize = new Sequelize(process.env[config.use_env_variable], config);

// Load all of the model files
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Associate the models
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Add the sequelize instance to the db object
db.sequelize = sequelize;

// Add the Sequelize constructor to the db object
db.Sequelize = Sequelize;

module.exports = db;
