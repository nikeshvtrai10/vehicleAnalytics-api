const clientService = require("../../../../services/v1/admin/client");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "client.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const clients = await clientService.listClient();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: clients,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
