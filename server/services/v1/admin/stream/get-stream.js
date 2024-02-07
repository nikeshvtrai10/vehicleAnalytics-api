const { Stream } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Stream
 * It will get a Stream.
 * @param queryObj
 * @returns {Promise<Stream>}
 */
module.exports = async (streamId) => {
  const stream = await Stream.findOne({
    where: {
      id: streamId,
      active: true,
    },
  });
  if (!stream) {
    throw new ValidationError("Unable to find the stream", 404);
  }

  return stream;
};
