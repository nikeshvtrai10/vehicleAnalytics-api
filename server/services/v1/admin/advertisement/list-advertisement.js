const { Advertisement } = require("../../../../models");

/**
 * List all Advertisements
 * It will list all Advertisements.
 * @returns {Promise<Array<Advertisement>>}
 */
module.exports = async () => {
  const advertisements = await Advertisement.findAll({
    where: {
      active: true,
    },
  });

  return advertisements;
};
