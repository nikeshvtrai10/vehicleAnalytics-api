'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class Agency extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Agency.hasMany(models.Client, {
        as: "Clients",
        foreignKey: "agencyId",
        sourceKey: "id",
      });

      Agency.hasMany(models.Display, {
        as: "Displays",
        foreignKey: "agencyId",
        sourceKey: "id",
      });

      Agency.hasMany(models.AgencyMember, {
        as: "AgencyMembers",
        foreignKey: "agencyId",
        sourceKey: "id",
      });
    }
  }
  Agency.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    panNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ownerContact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ownerCitizenship: {
      type: DataTypes.STRING,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Agency',
  });
  return Agency;
};