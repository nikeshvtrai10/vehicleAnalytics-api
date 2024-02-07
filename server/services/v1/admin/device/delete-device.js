const { Device } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Device
 * It will delete a Device.
 * @param deviceId
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
    throw new ValidationError("Unable to find the device.", 404);
  }

  device.active = false;

  await device.save();

  return device;
};
