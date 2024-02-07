const { Client } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Client
 * It will create a new Client
 * @param queryObj
 * @returns {Promise<Client>}
 */

module.exports = async (queryObj) => {
  const nameExists = await Client.findOne({
    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate Client Name", 403);
  }

  const client = await Client.create({ ...queryObj });

  if (!client) {
    throw new ValidationError("Unable to create a new client", 500);
  }

  return client;
};
