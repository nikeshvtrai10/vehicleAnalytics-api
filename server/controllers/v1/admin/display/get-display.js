const displayService = require("../../../../services/v1/admin/display");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "display.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const display = await displayService.getDisplay(req.params.displayId);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: display,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
