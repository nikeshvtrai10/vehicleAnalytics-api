const { Campaign } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Campaign
 * It will get a Campaign.
 * @param queryObj
 * @returns {Promise<Campaign>}
 */
module.exports = async (campaignId) => {
  const campaign = await Campaign.findOne({
    where: {
      id: campaignId,
      active: true,
    },
  });
  if (!campaign) {
    throw new ValidationError("Unable to find the campaign", 404);
  }

  return campaign;
};

