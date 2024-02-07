const campaignService = require("../../../../services/v1/admin/campaign");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "campaign.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const campaign = await campaignService.updateCampaign(
        req.params.campaignId,
        req.body
      );

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
