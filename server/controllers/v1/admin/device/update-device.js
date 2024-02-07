const deviceService = require("../../../../services/v1/admin/device");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "device.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const device = await deviceService.updateDevice(
        req.params.deviceId,
        req.body
      );

      res.status(httpStatus.OK).json({
        message: "Success",
        data: device,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
