const { Client } = require("../../../../models");

/**
 * List all Clients
 * It will list all Clients.
 * @returns {Promise<Array<Client>>}
 */
module.exports = async (agencyId) => {
  const clients = await Client.findAll({
    where: {
      agencyId,
      active: true,
    },
  });

  return clients;
};
