const campaignService = require("../../../../services/v1/agency/campaign");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "campaign.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const campaigns = await campaignService.listCampaign();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: campaigns,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
