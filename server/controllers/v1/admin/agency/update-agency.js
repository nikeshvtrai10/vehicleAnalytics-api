const agencyService = require("../../../../services/v1/admin/agency");

const httpStatus = require("http-status");

const {
  ValidationError
} = require("../../../../errors");

module.exports = async (req, res, next) => {
  console.log("THis is request", req)
  try {
    const reqPermission = "agency.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const agency = await agencyService.updateAgency(
        req.params.agencyId,
        req.body
      );
      console.log("This is agency", agency)
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