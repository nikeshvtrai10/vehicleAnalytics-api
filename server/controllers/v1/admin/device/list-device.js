const deviceService = require("../../../../services/v1/admin/device");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "device.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const devices = await deviceService.listDevice();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: devices,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
