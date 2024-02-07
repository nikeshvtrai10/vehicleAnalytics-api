const { Campaign } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Campaign
 * It will delete a Campaign.
 * @param campaignId
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
    throw new ValidationError("Unable to find the campaign.", 404);
  }

  campaign.active = false;

  await campaign.save();

  return campaign;
};
