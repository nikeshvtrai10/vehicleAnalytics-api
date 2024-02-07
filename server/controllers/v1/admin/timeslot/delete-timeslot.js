const timeslotService = require("../../../../services/v1/admin/timeslot");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "timeslot.delete";
    if (req.decoded.permissions.includes(reqPermission)) {
      const deleteStatus = await timeslotService.deleteTimeslot(
        req.params.timeslotId
      );

      if (deleteStatus) {
        res.status(httpStatus.OK).json({
          message: "Success",
        });
      } else {
        res.status(500).json({
          message: "Something went wrong",
        });
      }
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
