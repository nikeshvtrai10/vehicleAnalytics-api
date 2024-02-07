const timeslotService = require("../../../../services/v1/admin/timeslot");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "timeslot.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const timeslots = await timeslotService.listTimeslot();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: timeslots,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
