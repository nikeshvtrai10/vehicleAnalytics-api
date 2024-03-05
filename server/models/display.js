'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Display extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Display.hasMany(models.Device, {
        as: "Devices",
        foreignKey: "displayId",
        sourceKey: "id",
      });

      Display.belongsTo(models.Agency, {
        as: "Agencies",
        foreignKey: "agencyId",
      });
      Display.hasMany(models.Timeslot, {
        as: "Timeslots",
        foreignKey: "displayId",
        sourceKey: "id",
      });
    }
  }
  Display.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    agencyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    aspectRatio: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Display',
  });
  return Display;
};