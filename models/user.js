'use strict';

const bcrypt = require('bcrypt');

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // Define associations here
      User.hasMany(models.Post, {
        foreignKey: 'userId',
      });
      User.hasMany(models.Comment, {
        foreignKey: 'userId',
      });
    }

    async setPassword(password) {
      this.password = await bcrypt.hash(password, 10);
    }

    async validatePassword(password) {
      return await bcrypt.compare(password, this.password);
    }
  }

  User.init(
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'Invalid email address',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: [8, 255],
            msg: 'Password must be between 8 and 255 characters long',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
