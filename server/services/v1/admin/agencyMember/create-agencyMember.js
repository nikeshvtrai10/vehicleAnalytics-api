const { AgencyMember } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a AgencyMember
 * It will create a new AgencyMember
 * @param queryObj
 * @returns {Promise<AgencyMember>}
 */

module.exports = async (queryObj) => {
  const emailExists = await AgencyMember.findOne({
    where: {
      email: queryObj.email,
      active: true,
    },
  });

  if (emailExists) {
    throw new ValidationError("Duplicate Agency Member", 403);
  }

  const agencyMember = await AgencyMember.create({primary: false, roleId: "agency", ...queryObj });

  if (!agencyMember) {
    throw new ValidationError("Unable to create a new agencyMember", 500);
  }

  const {primary, roleId, password, ...restMember} = agencyMember;
  return restMember;
};
