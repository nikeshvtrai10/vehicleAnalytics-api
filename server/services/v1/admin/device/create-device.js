const { Device } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Device
 * It will create a new Device
 * @param queryObj
 * @returns {Promise<Device>}
 */

module.exports = async (queryObj) => {
  // const nameExists = await Device.findOne({
  //   where: {
  //     name: queryObj.name,
  //     active: true,
  //   },
  // });

  // if (nameExists) {
  //   throw new ValidationError("Duplicate Device Name", 403);
  // }

  const device = await Device.create({ ...queryObj });

  if (!device) {
    throw new ValidationError("Unable to create a new device", 500);
  }

  return device;
};
