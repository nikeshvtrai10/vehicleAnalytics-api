const { Client } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Client
 * It will delete a Client.
 * @param clientId
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
    throw new ValidationError("Unable to find the client.", 404);
  }

  client.active = false;

  await client.save();

  return client;
};
