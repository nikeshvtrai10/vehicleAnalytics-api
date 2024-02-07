const { Advertisement, Client, Campaign } = require("../../../../models");
const { ValidationError } = require("../../../../errors");

/**
 * List all Advertisements
 * It will list all Advertisements.
 * @returns {Promise<Array<Advertisement>>}
 */
module.exports = async (queryObj) => {
  const advertisements = await Advertisement.findOne({
    where: {
      id: queryObj.advertisementId,
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

  if (!advertisements) {
    throw new Error("Advertisement not found", 404);
  }
  return advertisements;
};
