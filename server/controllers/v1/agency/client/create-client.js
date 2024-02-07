const clientService = require("../../../../services/v1/agency/client");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "client.get";
    if (req.decoded.permissions.includes(reqPermission)) {
      if (req.decoded.agencyId !== req.body.agencyId) {
        throw new ValidationError("No Permission", 403);
      }
      const client = await clientService.createClient(req.body);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: client,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
