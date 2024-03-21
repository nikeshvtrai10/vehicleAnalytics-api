const { Stream } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Stream
 * It will create a new Stream
 * @param queryObj
 * @returns {Promise<Stream>}
 */

module.exports = async (queryObj) => {
  const idExists = await Stream.findOne({
    where: {
      id: queryObj.id,
      active: true,
    },
  });

  if (idExists) {
    throw new ValidationError("Duplicate Stream Id", 403);
  }

  const stream = await Stream.create({ ...queryObj });

  if (!stream) {
    throw new ValidationError("Unable to create a new stream", 500);
  }

  return stream;
};
