const { Advertisement, Timeslot, Display } = require("../../../../models");

/**
 * List all Advertisements
 * It will list all Advertisements.
 * @returns {Promise<Array<Advertisement>>}
 */
module.exports = async (queryObj) => {
  const timeslots = await Timeslot.findAll({
    where: {
      active: true,
    },
    include:[
      {
        model:Advertisement,
        as:"Advertisements",
        attributes:["name"],
        required:true,
      },
      {
        model:Display,
        as:"Displays",
        attributes:["location"],
        required:true,
      }
    ]
  });

  return timeslots;
};
