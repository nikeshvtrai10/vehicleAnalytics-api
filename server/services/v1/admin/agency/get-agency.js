const { Agency, AgencyMember, Display } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Agency
 * It will get a Agency.
 * @param queryObj
 * @returns {Promise<Agency>}
 */
module.exports = async (agencyId) => {
  const agency = await Agency.findOne({
    where: {
      id: agencyId,
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
      },
      {
        as: "Displays",
        model: Display,
        attributes: [
          "id",
          "location",
          "aspectRatio",
        ]
      },
    ]
  });
  if (!agency) {
    throw new ValidationError("Unable to find the agency", 404);
  }

  return agency;
};
