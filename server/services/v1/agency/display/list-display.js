const { Display, Agency } = require("../../../../models");

/**
 * List all Displays
 * It will list all Displays.
 * @returns {Promise<Array<Display>>}
 */
module.exports = async (agencyId) => {
  const displays = await Display.findAll({
    where: {
      agencyId,
      active: true,
    },
    include: [{
      model:Agency,
      as:"Agencies",
      attributes:["name"],
      required:true,
    }]
  });

  return displays;
};
