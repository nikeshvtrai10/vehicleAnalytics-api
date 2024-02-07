const { Device } = require("../../../../models");

/**
 * List all Devices
 * It will list all Devices.
 * @returns {Promise<Array<Device>>}
 */
module.exports = async () => {
  const devices = await Device.findAll({
    where: {
      active: true,
    },
  });

  return devices;
};
