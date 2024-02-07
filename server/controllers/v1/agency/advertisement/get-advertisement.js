const advertisementService = require("../../../../services/v1/agency/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const advertisement = await advertisementService.getAdvertisement({advertisementId: req.params.advertisementId, agencyId: req.decoded.agencyId});
      res.status(httpStatus.OK).json({
        message: "Success",
        data: advertisement,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
