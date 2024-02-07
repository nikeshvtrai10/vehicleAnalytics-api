const { AgencyMember } = require("../../../../models");

/**
 * List all AgencyMembers
 * It will list all AgencyMembers.
 * @returns {Promise<Array<AgencyMember>>}
 */
module.exports = async (agencyId) => {
  const agencyMembers = await AgencyMember.findAll({
    where: {
      agencyId,
      active: true,
    },
    attributes: {
      exclude: ["password"]
    }
  });

  return agencyMembers;
};
