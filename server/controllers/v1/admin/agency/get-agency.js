const agencyService = require("../../../../services/v1/admin/agency");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "agency.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const agency = await agencyService.getAgency(req.params.agencyId);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: agency,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
