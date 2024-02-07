const streamZoneService = require("../../../../services/v1/admin/streamZone");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "streamZone.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const streamZone = await streamZoneService.createStreamZone(req.body);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: streamZone,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
