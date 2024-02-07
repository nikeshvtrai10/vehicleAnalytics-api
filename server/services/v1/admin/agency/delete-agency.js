const { Agency } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Agency
 * It will delete a Agency.
 * @param agencyId
 * @returns {Promise<Agency>}
 */
module.exports = async (agencyId) => {
  const agency = await Agency.findOne({
    where: {
      id: agencyId,
      active: true,
    },
  });
  if (!agency) {
    throw new ValidationError("Unable to find the agency.", 404);
  }

  agency.active = false;

  await agency.save();

  return agency;
};
