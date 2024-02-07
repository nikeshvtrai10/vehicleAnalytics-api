const { Advertisement } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Advertisement
 * It will get a Advertisement.
 * @param queryObj
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
    throw new ValidationError("Unable to find the advertisement", 404);
  }

  return advertisement;
};
