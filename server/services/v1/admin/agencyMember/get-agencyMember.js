const { AgencyMember } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a AgencyMember
 * It will get a AgencyMember.
 * @param queryObj
 * @returns {Promise<AgencyMember>}
 */
module.exports = async (agencyMemberId) => {
  const agencyMember = await AgencyMember.findOne({
    where: {
      id: agencyMemberId,
      active: true,
    },
  });
  if (!agencyMember) {
    throw new ValidationError("Unable to find the agencyMember", 404);
  }

  return agencyMember;
};
