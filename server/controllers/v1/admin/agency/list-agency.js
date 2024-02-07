const agencyService = require("../../../../services/v1/admin/agency");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "agency.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const agencys = await agencyService.listAgency();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: agencys,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
