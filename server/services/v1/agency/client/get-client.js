const { Client } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Client
 * It will get a Client.
 * @param queryObj
 * @returns {Promise<Client>}
 */
module.exports = async (clientId) => {
  const client = await Client.findOne({
    where: {
      id: clientId,
      active: true,
    },
  });
  if (!client) {
    throw new ValidationError("Unable to find the client", 404);
  }

  return client;
};
