const { Advertisement } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Advertisement
 * It will delete a Advertisement.
 * @param advertisementId
 * @returns {Promise<Advertisement>}
 */
module.exports = async (advertisementId) => {
  const advertisement = await Advertisement.findOne({
    where: {
      id: advertisementId,
      active: true,
    },
  });
  if (!advertisement) {
    throw new ValidationError("Unable to find the advertisement.", 404);
  }

  advertisement.active = false;

  await advertisement.save();

  return advertisement;
};
