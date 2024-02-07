const { Device } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Device
 * It will update a Device.
 * @param queryObj
 * @returns {Promise<Device>}
 */
module.exports = async (deviceId, queryObj) => {
  const device = await Device.findOne({
    where: {
      id: deviceId,
      active: true,
    },
  });

  if (!device) {
    throw new ValidationError("Unable to find the device.", 404);
  }

  // const duplicateDevice = await Device.findOne({
  //   where: {
  //     name: queryObj.name,
  //     active: true,
  //     id: {
  //       [Op.ne]: device.dataValues.id,
  //     },
  //   },
  // });

  // if (duplicateDevice) throw new ValidationError("Duplicate Device Name", 403);

  device.location = queryObj.location;
  device.resolution = queryObj.resolution;
  device.modelNumber = queryObj.modelNumber;
  await device.save();

  return device;
};
