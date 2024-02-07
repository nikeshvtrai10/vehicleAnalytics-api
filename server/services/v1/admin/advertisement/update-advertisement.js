const { Advertisement } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Advertisement
 * It will update a Advertisement.
 * @param queryObj
 * @returns {Promise<Advertisement>}
 */
module.exports = async (advertisementId, updateObj) => {
  const advertisement = await Advertisement.findOne({
    where: {
      id: advertisementId,
      active: true,
    },
  });

  if (!advertisement) {
    throw new ValidationError("Unable to find the advertisement.", 404);
  }

  advertisement.campaignId = updateObj.campaignId;
  advertisement.videoUrl = updateObj.videoUrl;
  advertisement.name = updateObj.name;

  await advertisement.save();

  return advertisement;
};
