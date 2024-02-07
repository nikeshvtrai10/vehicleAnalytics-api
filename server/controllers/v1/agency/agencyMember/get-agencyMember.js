const agencyMemberService = require("../../../../services/v1/agency/agencyMember");

const httpStatus = require("http-status");

const {
  ValidationError
} = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "agencyMember.get";

    if (req.decoded.permissions.includes(reqPermission) && req.decoded.primary) {
      const agencyMember = await agencyMemberService.getAgencyMember({
        agencyMemberId: req.params.agencyMemberId,
        agencyId: req.decoded.agencyId
      });
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