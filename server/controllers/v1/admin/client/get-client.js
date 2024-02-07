const clientService = require("../../../../services/v1/admin/client");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "client.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const client = await clientService.getClient(req.params.clientId);
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
