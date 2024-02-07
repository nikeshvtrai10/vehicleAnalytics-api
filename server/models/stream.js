'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require("bcryptjs");
module.exports = (sequelize, DataTypes) => {
  class Stream extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stream.hasMany(models.StreamZone, {
        as: "StreamZones",
        foreignKey: "streamId",
        sourceKey: "id",
      });
      Stream.belongsTo(models.Device, {
        as: "Devices",
        foreignKey: "deviceId",
      });
    }
  }
  Stream.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    deviceId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cameraId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    streamUrl: {
      type: DataTypes.STRING,
      allowNull: false
    },
    modelName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageSize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    detectionThreshold: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    minSize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maxSize: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tilt: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    minThreshold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maxThreshold: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'Stream',
    hooks: {
      beforeCreate: (stream) => {
        const salt = bcrypt.genSaltSync(8);
        stream.password = bcrypt.hashSync(stream.password, salt);
      },
    },
  });
  Stream.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return Stream;
};