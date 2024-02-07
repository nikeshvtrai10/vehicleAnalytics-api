const { Agency, AgencyMember } = require("../../../../models");

/**
 * List all Agencys
 * It will list all Agencys.
 * @returns {Promise<Array<Agency>>}
 */
module.exports = async () => {
  const agencies = await Agency.findAll({
    where: {
      active: true,
    },
    include: [
      {
        as: "AgencyMembers",
        model: AgencyMember,
        attributes:[
          "id", "firstName", "middleName", "lastName", "email"
        ],
        where: {active: true}
      }
    ]
  });

  return agencies;
};
