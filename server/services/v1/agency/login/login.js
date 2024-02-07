const { Agency, Role, RolePermission, AgencyMember } = require("../../../../models");

const Sequelize = require("sequelize");

const { ValidationError } = require("../../../../errors");

/**
 * Get a User
 * It will find a User from provided email and password
 * @param {queryObj}
 * @returns {Promise<User>}
 */

module.exports = async (queryObj) => {
  const agencyMember = await AgencyMember.findOne({
    where: {
      email: queryObj.email,
      active: true
    },
  });

  if (agencyMember === null) {
    throw new ValidationError("Agency not found",404 );
  } else if (!agencyMember.validPassword(queryObj.password)) {
    throw new ValidationError("Wrong Password", 400);
  }

  const role = await Role.findOne({
    where: {
      id: agencyMember.dataValues.roleId,
    },
  });
  
  const roles = [role.dataValues.id];
 
  const permission = await RolePermission.findAll({
    attributes: ["permissionId"],
    where: {
      roleId: {
        [Sequelize.Op.in]: roles,
      },
    },
  });
  

  return { agencyMember, roles, permission };
};
