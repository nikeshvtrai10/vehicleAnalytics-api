const router = require("express").Router();
const deviceController = require("../../../controllers/v1/admin/device");

router
  .route("/")
  .get(deviceController.listDevice)
  .post(deviceController.createDevice);

router
  .route("/:deviceId")
  .get(deviceController.getDevice)
  .delete(deviceController.deleteDevice)
  .patch(deviceController.updateDevice);

module.exports = router;
