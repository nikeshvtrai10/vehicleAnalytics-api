const { AgencyMember } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a AgencyMember
 * It will delete a AgencyMember.
 * @param agencyMemberId
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
    throw new ValidationError("Unable to find the agencyMember.", 404);
  }

  agencyMember.active = false;

  await agencyMember.save();

  return agencyMember;
};
