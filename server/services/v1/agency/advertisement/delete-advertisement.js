const { Advertisement, Client, Campaign } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Advertisement
 * It will delete a Advertisement.
 * @param advertisementId
 * @returns {Promise<Advertisement>}
 */
module.exports = async (queryObj) => {
  const advertisement = await Advertisement.findOne({
    where: {
      id: queryObj.advertisementId,
      active: true,
    },
  });

  if (!advertisement) {
    throw new ValidationError("Unable to find the advertisement.", 404);
  }

  const validCampaigns = await Campaign.findAll({
    where: {
      active: true,
    },
    include: [
      {
        model: Client,
        as: "Clients",
        where: {
          agencyId: queryObj.agencyId,
          active: true,
        },
      },
    ],
  });

  const validCampaignIds = validCampaigns.map((item) => item.dataValues.id);

  if (!validCampaignIds.includes(+advertisement.campaignId)) {
    throw new ValidationError("No Permission", 403);
  }

  advertisement.active = false;

  await advertisement.save();

  return advertisement;
};
