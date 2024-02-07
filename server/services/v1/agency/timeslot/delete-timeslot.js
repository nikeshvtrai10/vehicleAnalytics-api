const { Timeslot } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Timeslot
 * It will delete a Timeslot.
 * @param timeslotId
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
    throw new ValidationError("Unable to find the timeslot.", 404);
  }

  timeslot.active = false;

  await timeslot.save();

  return timeslot;
};
