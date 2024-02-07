const streamService = require("../../../../services/v1/admin/stream");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "stream.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const streams = await streamService.listStream();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: streams,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
