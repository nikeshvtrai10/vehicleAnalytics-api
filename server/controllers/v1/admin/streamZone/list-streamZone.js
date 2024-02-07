const streamZoneService = require("../../../../services/v1/admin/streamZone");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "streamZone.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const streamZones = await streamZoneService.listStreamZone();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: streamZones,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
