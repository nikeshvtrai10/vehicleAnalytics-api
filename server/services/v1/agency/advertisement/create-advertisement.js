const { Advertisement } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

const moment = require("moment");
/**
 * Create a Advertisement
 * It will create a new Advertisement
 * @param queryObj
 * @returns {Promise<Advertisement>}
 */

module.exports = async (files, queryObj) => {
  const advertisement = await Advertisement.create({
    ...queryObj,
    videoUrl: `${process.env.GCLOUD_LINK}/${files.video[0].filename}`,
  });

  if (!advertisement) {
    throw new ValidationError("Unable to create a new advertisement", 500);
  }

  return advertisement;
};
