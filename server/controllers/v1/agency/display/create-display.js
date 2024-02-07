const displayService = require("../../../../services/v1/agency/display");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "display.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      if (req.decoded.agencyId !== req.body.agencyId) {
        throw new ValidationError("No Permission", 403);
      }
      const display = await displayService.createDisplay(req.body);
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
