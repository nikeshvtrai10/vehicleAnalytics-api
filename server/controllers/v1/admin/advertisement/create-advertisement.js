const advertisementService = require("../../../../services/v1/admin/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const advertisement = await advertisementService.createAdvertisement(
        req.body
      );
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
