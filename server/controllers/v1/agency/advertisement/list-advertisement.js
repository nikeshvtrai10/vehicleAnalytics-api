const advertisementService = require("../../../../services/v1/agency/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const advertisements = await advertisementService.listAdvertisement({
        agencyId:req.decoded.agencyId
      });
      res.status(httpStatus.OK).json({
        message: "Success",
        data: advertisements,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
