const { Client } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Client
 * It will update a Client.
 * @param queryObj
 * @returns {Promise<Client>}
 */
module.exports = async (clientId, queryObj) => {
  const client = await Client.findOne({
    where: {
      id: clientId,
      active: true,
    },
  });

  if (!client) {
    throw new ValidationError("Unable to find the client.", 404);
  }

  const duplicateClient = await Client.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: client.dataValues.id,
      },
    },
  });

  if (duplicateClient) throw new ValidationError("Duplicate Client Name", 403);

  client.name = queryObj.name;
  await client.save();

  return client;
};
