const { StreamZone } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a StreamZone
 * It will update a StreamZone.
 * @param queryObj
 * @returns {Promise<StreamZone>}
 */
module.exports = async (streamZoneId, queryObj) => {
  let streamZone = await StreamZone.findOne({
    where: {
      id: streamZoneId,
      active: true,
    },
  });

  if (!streamZone) {
    throw new ValidationError("Unable to find the streamZone.", 404);
  }

  const duplicateStreamZone = await StreamZone.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: streamZone.dataValues.id,
      },
    },
  });

  if (duplicateStreamZone) throw new ValidationError("Duplicate StreamZone Name", 403);

  streamZone.streamId = queryObj.streamId;
  streamZone.name = queryObj.name;
  streamZone.points = queryObj.points;
  await streamZone.save();

  return streamZone;
};
