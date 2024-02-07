const { AgencyMember } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a AgencyMember
 * It will get a AgencyMember.
 * @param queryObj
 * @returns {Promise<AgencyMember>}
 */
module.exports = async (queryObj) => {
  const agencyMember = await AgencyMember.findOne({
    where: {
      agencyId: queryObj.agencyId,
      id: queryObj.agencyMemberId,
      active: true,
    },
    attributes: {
      exclude: ["password"]
    }
  });
  if (!agencyMember) {
    throw new ValidationError("Unable to find the agencyMember", 404);
  }

  return agencyMember;
};
