const { Timeslot } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Timeslot
 * It will update a Timeslot.
 * @param queryObj
 * @returns {Promise<Timeslot>}
 */
module.exports = async (timeslotId, queryObj) => {
  const timeslot = await Timeslot.findOne({
    where: {
      id: timeslotId,
      active: true,
    },
  });

  if (!timeslot) {
    throw new ValidationError("Unable to find the timeslot.", 404);
  }

  const duplicateTimeslot = await Timeslot.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: timeslot.dataValues.id,
      },
    },
  });

  if (duplicateTimeslot) throw new ValidationError("Duplicate Timeslot Name", 403);

  timeslot.name = queryObj.name;
  await timeslot.save();

  return timeslot;
};
