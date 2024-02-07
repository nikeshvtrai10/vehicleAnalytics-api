const { Agency } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Agency
 * It will update a Agency.
 * @param queryObj
 * @returns {Promise<Agency>}
 */
module.exports = async (agencyId, updateObj) => {
  const agency = await Agency.findOne({
    where: {
      id: agencyId,
      active: true,
    },
  });

  if (!agency) {
    throw new ValidationError("Unable to find the agency.", 404);
  }

  agency.name = updateObj.name;
  agency.email = updateObj.email;
  agency.phone = updateObj.phone;
  agency.address = updateObj.address;
  agency.panNumber = updateObj.panNumber;
  await agency.save();

  return agency;
};
