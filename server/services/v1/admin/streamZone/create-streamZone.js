const { StreamZone } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a StreamZone
 * It will create a new StreamZone
 * @param queryObj
 * @returns {Promise<StreamZone>}
 */

module.exports = async (queryObj) => {
  const nameExists = await StreamZone.findOne({
    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate StreamZone Name", 403);
  }

  const streamZone = await StreamZone.create({ ...queryObj });

  if (!streamZone) {
    throw new ValidationError("Unable to create a new streamZone", 500);
  }

  return streamZone;
};
