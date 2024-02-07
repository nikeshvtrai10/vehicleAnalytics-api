const { StreamZone } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a StreamZone
 * It will delete a StreamZone.
 * @param streamZoneId
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
    throw new ValidationError("Unable to find the streamZone.", 404);
  }

  streamZone.active = false;

  await streamZone.save();

  return streamZone;
};
