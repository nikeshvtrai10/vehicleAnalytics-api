"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Role.hasMany(models.AgencyMember, {
        as: "AgencyMembers",
        foreignKey: "roleId",
        sourceKey: "id",
      });
      Role.belongsToMany(models.User, {
        through: models.UserRole,
        as: "UseRoles",
        foreignKey: "roleId",
        sourceKey: "id",
      });
      Role.belongsToMany(models.Permission, {
        through: models.RolePermission,
        as: "RolePermissions",
        foreignKey: "roleId",
        sourceKey: "id",
      });
    }
  }
  Role.init(
    {
      id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Role",
    }
  );
  return Role;
};
