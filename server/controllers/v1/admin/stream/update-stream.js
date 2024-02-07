const streamService = require("../../../../services/v1/admin/stream");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "stream.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const stream = await streamService.updateStream(
        req.params.streamId,
        req.body
      );

      res.status(httpStatus.OK).json({
        message: "Success",
        data: stream,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
