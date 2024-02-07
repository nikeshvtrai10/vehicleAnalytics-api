const { Campaign } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Campaign
 * It will update a Campaign.
 * @param queryObj
 * @returns {Promise<Campaign>}
 */
module.exports = async (campaignId, queryObj) => {
  const campaign = await Campaign.findOne({
    where: {
      id: campaignId,
      active: true,
    },
  });

  if (!campaign) {
    throw new ValidationError("Unable to find the campaign.", 404);
  }

  const duplicateCampaign = await Campaign.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: campaign.dataValues.id,
      },
    },
  });

  if (duplicateCampaign) throw new ValidationError("Duplicate Campaign Name", 403);

  campaign.name = queryObj.name || campaign.name;
  campaign.startDate = queryObj.startDate || campaign.startDate;
  campaign.endDate = queryObj.endDate || campaign.endDate;
  campaign.description = queryObj.description || campaign.description;
  await campaign.save();

  return campaign;
};
