const { Stream } = require("../../../../models");

/**
 * List all Streams
 * It will list all Streams.
 * @returns {Promise<Array<Stream>>}
 */
module.exports = async () => {
  const streams = await Stream.findAll({
    where: {
      active: true,
    },
  });

  return streams;
};
