const advertisementService = require("../../../../services/v1/agency/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.delete";
    if (req.decoded.permissions.includes(reqPermission)) {
      const deleteStatus = await advertisementService.deleteAdvertisement(
        {advertisementId: req.params.advertisementId, agencyId: req.decoded.agencyId}
      );

      if (deleteStatus) {
        res.status(httpStatus.OK).json({
          message: "Success",
        });
      } else {
        res.status(500).json({
          message: "Something went wrong",
        });
      }
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
