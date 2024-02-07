const agencyMemberService = require("../../../../services/v1/agency/agencyMember");

const httpStatus = require("http-status");

const {
  ValidationError
} = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "agencyMember.update";
    if (req.decoded.permissions.includes(reqPermission) && req.decoded.primary) {
      const agencyMember = await agencyMemberService.updateAgencyMember(
        {agencyId: req.decoded.agencyId,
        agencyMemberId: req.params.agencyMemberId,
        body: req.body}
      );

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