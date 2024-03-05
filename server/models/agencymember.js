'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs');
module.exports = (sequelize, DataTypes) => {
  class AgencyMember extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AgencyMember.belongsTo(models.Agency, {
        as: "Agencies",
        foreignKey: "agencyId",
      });
      AgencyMember.belongsTo(models.Role, {
        as: "Roles",
        foreignKey: "roleId",
      });
    }
  }
  AgencyMember.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    agencyId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primary: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    modelName: 'AgencyMember',
    hooks: {
      beforeCreate: (m) => {
        const salt = bcrypt.genSaltSync(8);
        m.password = bcrypt.hashSync(m.password, salt);
      },
    },
  });
  AgencyMember.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  return AgencyMember;
};