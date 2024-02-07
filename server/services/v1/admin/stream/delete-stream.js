const { Stream } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Stream
 * It will delete a Stream.
 * @param streamId
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
    throw new ValidationError("Unable to find the stream.", 404);
  }

  stream.active = false;

  await stream.save();

  return stream;
};
