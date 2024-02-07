const { Campaign, Client } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Campaign
 * It will create a new Campaign
 * @param queryObj
 * @returns {Promise<Campaign>}
 */

module.exports = async (queryObj, agencyId) => {
  const validClients = await Client.findAll({
    where: {
      agencyId,
      active: true
    }
  })

  const validClientIds = validClients.map((item) => item.dataValues.id);

  if (!validClientIds.includes(+queryObj.clientId)) {
    throw new ValidationError("No Permission", 403);
  }
  
  const nameExists = await Campaign.findOne({

    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate Campaign Name", 403);
  }

  const campaign = await Campaign.create({ ...queryObj });

  if (!campaign) {
    throw new ValidationError("Unable to create a new campaign", 500);
  }

  return campaign;
};
