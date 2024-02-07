const { Timeslot } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Timeslot
 * It will get a Timeslot.
 * @param queryObj
 * @returns {Promise<Timeslot>}
 */
module.exports = async (timeslotId) => {
  const timeslot = await Timeslot.findOne({
    where: {
      id: timeslotId,
      active: true,
    },
  });
  if (!timeslot) {
    throw new ValidationError("Unable to find the timeslot", 404);
  }

  return timeslot;
};
