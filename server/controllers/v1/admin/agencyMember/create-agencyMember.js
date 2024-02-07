const agencyMemberService = require("../../../../services/v1/admin/agencyMember");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "agencyMember.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const agencyMember = await agencyMemberService.createAgencyMember(req.body);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: agencyMember,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
