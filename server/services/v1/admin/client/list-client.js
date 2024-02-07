const { Client } = require("../../../../models");

/**
 * List all Clients
 * It will list all Clients.
 * @returns {Promise<Array<Client>>}
 */
module.exports = async () => {
  const clients = await Client.findAll({
    where: {
      active: true,
    },
  });

  return clients;
};
