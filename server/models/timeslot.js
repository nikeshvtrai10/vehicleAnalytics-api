'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timeslot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Timeslot.belongsTo(models.Advertisement, {
        as: "Advertisements",
        foreignKey: "advertisementId",
      });
      Timeslot.belongsTo(models.Display, {
        as: "Displays",
        foreignKey: "displayId",
      });
    }
  }
  Timeslot.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    advertisementId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    displayId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    endTime: {
      type: DataTypes.TIME,
      allowNull: false
    },
    showDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Timeslot',
  });
  return Timeslot;
};