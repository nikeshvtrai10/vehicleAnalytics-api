const campaignService = require("../../../../services/v1/admin/campaign");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "campaign.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const campaign = await campaignService.getCampaign(req.params.campaignId);
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
