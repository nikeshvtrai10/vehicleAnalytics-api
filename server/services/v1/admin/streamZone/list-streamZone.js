const { StreamZone } = require("../../../../models");

/**
 * List all StreamZones
 * It will list all StreamZones.
 * @returns {Promise<Array<StreamZone>>}
 */
module.exports = async () => {
  const streamZones = await StreamZone.findAll({
    where: {
      active: true,
    },
  });

  return streamZones;
};
