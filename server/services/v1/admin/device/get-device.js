const { Device } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Device
 * It will get a Device.
 * @param queryObj
 * @returns {Promise<Device>}
 */
module.exports = async (deviceId) => {
  const device = await Device.findOne({
    where: {
      id: deviceId,
      active: true,
    },
  });
  if (!device) {
    throw new ValidationError("Unable to find the device", 404);
  }

  return device;
};
