const jwt = require("jsonwebtoken");
const loginService = require("../../../../services/v1/agency/login");

module.exports = async (req, res, next) => {
  try {
    const { agencyMember, agency, roles, permission } = await loginService.login(req.body);

    const permissions = [];

    for (let i = 0; i < permission.length; i++) {
      permissions.push(permission[i].dataValues.permissionId);
    }

    const token = jwt.sign(
      {
        id: agencyMember.id,
        agencyId: agencyMember.agencyId,
        email: agencyMember.email,
        primary: agencyMember.primary,
        roles,
        permissions,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );

    const { password, ...restMember } = agencyMember.dataValues;

    return res.status(200).json({
      message: "success",
      data: {
        agencyMember: restMember,
        agency,
        permissions,
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};
