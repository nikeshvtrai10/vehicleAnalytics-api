const reportAnalysisService = require("../../../../services/v1/agency/reportAnalysis");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "client.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const reports = await reportAnalysisService.listReport({
        agencyId: req.decoded.agencyId,
        clientId:req.body.clientId,
        campaignId:req.body.campaignId,
      });
      res.status(httpStatus.OK).json({
        message: "Success",
        data: reports,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
