const campaignService = require("../../../../services/v1/agency/campaign");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "campaign.create";
    console.log(req.decoded.permissions)
    if (req.decoded.permissions.includes(reqPermission)) {
      const campaign = await campaignService.createCampaign(req.body, req.decoded.agencyId);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: campaign,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
