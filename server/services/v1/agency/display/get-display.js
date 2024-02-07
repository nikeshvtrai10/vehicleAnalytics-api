const { Display } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Display
 * It will get a Display.
 * @param queryObj
 * @returns {Promise<Display>}
 */
module.exports = async (displayId, agencyId) => {
  const display = await Display.findOne({
    where: {
      id: displayId,
      agencyId,
      active: true,
    },
  });
  if (!display) {
    throw new ValidationError("Unable to find the display", 404);
  }

  return display;
};
