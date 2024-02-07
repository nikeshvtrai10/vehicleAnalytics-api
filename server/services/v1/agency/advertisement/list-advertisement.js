const { Advertisement, Client, Campaign } = require("../../../../models");

/**
 * List all Advertisements
 * It will list all Advertisements.
 * @returns {Promise<Array<Advertisement>>}
 */
module.exports = async (queryObj) => {
  const advertisements = await Advertisement.findAll({
    where: {
      active: true,
    },
    include: [
      {
        model: Campaign,
        as: "AdCampaigns",
        attributes: ["name"],
        required: true,
        include: [
          {
            model: Client,
            as: "Clients",
            required: true,
            attributes: ["name"],
            where: {
              agencyId: queryObj.agencyId,
            },
          },
        ],
      },
    ],
  });

  return advertisements;
};
