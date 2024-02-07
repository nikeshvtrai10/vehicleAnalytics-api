const { Advertisement, Client, Campaign } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");
const { query } = require("express");

/**
 * Update a Advertisement
 * It will update a Advertisement.
 * @param queryObj
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

  if (queryObj.body.campaignId) {
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

    if (!validCampaignIds.includes(+queryObj.campaignId)) {
      throw new ValidationError("No Permission", 403);
    }
  }

  advertisement.campaignId =
    queryObj.body.campaignId || advertisement.campaignId;
  advertisement.videoUrl = queryObj.body.videoUrl || advertisement.videoUrl;
  advertisement.name = queryObj.body.name || advertisement.name;

  await advertisement.save();

  return advertisement;
};
