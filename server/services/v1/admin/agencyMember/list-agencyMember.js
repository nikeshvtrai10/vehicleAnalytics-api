const { AgencyMember } = require("../../../../models");

/**
 * List all AgencyMembers
 * It will list all AgencyMembers.
 * @returns {Promise<Array<AgencyMember>>}
 */
module.exports = async () => {
  const agencyMembers = await AgencyMember.findAll({
    where: {
      active: true,
    },
  });

  return agencyMembers;
};
