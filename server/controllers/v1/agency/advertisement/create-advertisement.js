const advertisementService = require("../../../../services/v1/agency/advertisement");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

const pushToCDN = require("../../../../utils/push-to-cdn");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "advertisement.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      console.log("hereee");

      const advertisement = await advertisementService.createAdvertisement(
        req.files,
        req.body,
        req.decoded.agencyId
      );
      let fileNames = [];

      req.files.video.forEach((e) => {
        fileNames.push(e.filename);
      });

      console.log(fileNames);

      await pushToCDN(fileNames);

      res.status(httpStatus.OK).json({
        message: "Success",
        data: advertisement,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
