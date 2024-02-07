const { StreamZone } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a StreamZone
 * It will get a StreamZone.
 * @param queryObj
 * @returns {Promise<StreamZone>}
 */
module.exports = async (streamZoneId) => {
  const streamZone = await StreamZone.findOne({
    where: {
      id: streamZoneId,
      active: true,
    },
  });
  if (!streamZone) {
    throw new ValidationError("Unable to find the streamZone", 404);
  }

  return streamZone;
};
