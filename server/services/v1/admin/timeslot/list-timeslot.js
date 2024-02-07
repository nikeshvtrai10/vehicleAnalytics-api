const { Timeslot } = require("../../../../models");

/**
 * List all Timeslots
 * It will list all Timeslots.
 * @returns {Promise<Array<Timeslot>>}
 */
module.exports = async () => {
  const timeslots = await Timeslot.findAll({
    where: {
      active: true,
    },
  });

  return timeslots;
};
