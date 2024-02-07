const advertisementService = require("../../../../services/v1/agency/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const advertisement = await advertisementService.updateAdvertisement({
        advertisementId: req.params.advertisementId,
        agencyId: req.decoded.agencyId,
        body: req.body,
      });

      return res.status(httpStatus.OK).json({
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
