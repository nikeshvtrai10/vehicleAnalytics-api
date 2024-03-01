const { Client, Campaign, Advertisement } = require("../../../../models");

const { Op } = require("sequelize");
 
/**
 * List all Clients
 * It will list all Clients.
 * @returns {Promise<Array<Client>>}
 */
module.exports = async ({agencyId, clientId, campaignId}) => {
  const campaigns = await Campaign.findAll({
    where: {
      clientId,
      id:{
        [Op.in]: campaignId
      },
      active: true,
    },
    include:[
        {
          model:Advertisement,
          as:"Advertisements",
          attributes:["id", "name"],
          required:true,
        },
        {
            model:Client,
            as:"Clients",
            attributes:["name"],
            required:true, 
            where:{
                agencyId,
            }
        }
    ]
  });

  return campaigns;
};
