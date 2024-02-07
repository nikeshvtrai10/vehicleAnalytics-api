const { Timeslot } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Timeslot
 * It will create a new Timeslot
 * @param queryObj
 * @returns {Promise<Timeslot>}
 */

module.exports = async (queryObj) => {
  const nameExists = await Timeslot.findOne({
    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate Timeslot Name", 403);
  }

  const timeslot = await Timeslot.create({ ...queryObj });

  if (!timeslot) {
    throw new ValidationError("Unable to create a new timeslot", 500);
  }

  return timeslot;
};
