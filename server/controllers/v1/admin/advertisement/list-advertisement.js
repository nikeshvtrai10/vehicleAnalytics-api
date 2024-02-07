const advertisementService = require("../../../../services/v1/admin/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const advertisements = await advertisementService.listAdvertisement();
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
