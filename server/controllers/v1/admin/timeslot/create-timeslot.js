const timeslotService = require("../../../../services/v1/admin/timeslot");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "timeslot.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const timeslot = await timeslotService.createTimeslot(req.body);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: timeslot,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
