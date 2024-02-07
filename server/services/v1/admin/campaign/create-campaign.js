const { Campaign } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Campaign
 * It will create a new Campaign
 * @param queryObj
 * @returns {Promise<Campaign>}
 */

module.exports = async (queryObj) => {
  const nameExists = await Campaign.findOne({
    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate Campaign Name", 403);
  }

  const campaign = await Campaign.create({ ...queryObj });
  console.log(campaign)

  if (!campaign) {
    throw new ValidationError("Unable to create a new campaign", 500);
  }

  return campaign;
};
