const { Display } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Display
 * It will create a new Display
 * @param queryObj
 * @returns {Promise<Display>}
 */

module.exports = async (queryObj) => {
  // const nameExists = await Display.findOne({
  //   where: {
  //     name: queryObj.name,
  //     active: true,
  //   },
  // });

  // if (nameExists) {
  //   throw new ValidationError("Duplicate Display Name", 403);
  // }

  const display = await Display.create({ ...queryObj });

  if (!display) {
    throw new ValidationError("Unable to create a new display", 500);
  }

  return display;
};
