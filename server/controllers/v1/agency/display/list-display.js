const displayService = require("../../../../services/v1/agency/display");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "display.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const displays = await displayService.listDisplay(req.decoded.agencyId);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: displays,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
