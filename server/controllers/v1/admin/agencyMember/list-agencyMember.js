const agencyMemberService = require("../../../../services/v1/admin/agencyMember");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "agencyMember.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const agencyMembers = await agencyMemberService.listAgencyMember();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: agencyMembers,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
