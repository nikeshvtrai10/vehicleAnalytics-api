const { Campaign } = require("../../../../models");

/**
 * List all Campaigns
 * It will list all Campaigns.
 * @returns {Promise<Array<Campaign>>}
 */
module.exports = async () => {
  const campaigns = await Campaign.findAll({
    where: {
      active: true,
    },
  });

  return campaigns;
};                                                           