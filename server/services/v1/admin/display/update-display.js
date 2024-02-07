const { Display } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Display
 * It will update a Display.
 * @param queryObj
 * @returns {Promise<Display>}
 */
module.exports = async (displayId, queryObj) => {
  const display = await Display.findOne({
    where: {
      id: displayId,
      active: true,
    },
  });

  if (!display) {
    throw new ValidationError("Unable to find the display.", 404);
  }

  // const duplicateDisplay = await Display.findOne({
  //   where: {
  //     name: queryObj.name,
  //     active: true,
  //     id: {
  //       [Op.ne]: display.dataValues.id,
  //     },
  //   },
  // });

  // if (duplicateDisplay) throw new ValidationError("Duplicate Display Name", 403);

  display.location = queryObj.location;
  display.resolution = queryObj.resolution;
  display.modelNumber = queryObj.modelNumber;
  await display.save();

  return display;
};
