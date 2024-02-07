const { Display } = require("../../../../models");

/**
 * List all Displays
 * It will list all Displays.
 * @returns {Promise<Array<Display>>}
 */
module.exports = async () => {
  const displays = await Display.findAll({
    where: {
      active: true,
    },
  });

  return displays;
};
