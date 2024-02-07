const { Display } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Display
 * It will delete a Display.
 * @param displayId
 * @returns {Promise<Display>}
 */
module.exports = async (displayId) => {
  const display = await Display.findOne({
    where: {
      id: displayId,
      active: true,
    },
  });
  if (!display) {
    throw new ValidationError("Unable to find the display.", 404);
  }

  display.active = false;

  await display.save();

  return display;
};
