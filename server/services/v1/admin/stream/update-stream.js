const { Stream } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Stream
 * It will update a Stream.
 * @param queryObj
 * @returns {Promise<Stream>}
 */
module.exports = async (streamId, queryObj) => {
  let stream = await Stream.findOne({
    where: {
      id: streamId,
      active: true,
    },
  });

  if (!stream) {
    throw new ValidationError("Unable to find the stream.", 404);
  }

  const duplicateStream = await Stream.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: stream.dataValues.id,
      },
    },
  });

  if (duplicateStream) throw new ValidationError("Duplicate Stream Name", 403);

  stream.cameraId = queryObj.cameraId;
  stream.name = queryObj.name;
  stream.username = queryObj.username;
  stream.streamUrl = queryObj.streamUrl;
  stream.modelName = queryObj.modelName;
  stream.imageSize = queryObj.imageSize;
  stream.detectionThreshold = queryObj.detectionThreshold;
  stream.minSize = queryObj.minSize;
  stream.maxSize = queryObj.maxSize;
  stream.tilt = queryObj.tilt;
  stream.minThreshold = queryObj.minThreshold;
  stream.maxThreshold = queryObj.maxThreshold;
  await stream.save();

  return stream;
};
