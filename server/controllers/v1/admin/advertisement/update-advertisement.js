const advertisementService = require("../../../../services/v1/admin/advertisement");

const httpStatus = require("http-status");

const {
  ValidationError
} = require("../../../../errors");

module.exports = async (req, res, next) => {
  console.log("THis is request", req)
  try {
    const reqPermission = "advertisement.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const advertisement = await advertisementService.updateAdvertisement(
        req.params.advertisementId,
        req.body
      );
      console.log("This is advertisement", advertisement)
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