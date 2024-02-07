const router = require("express").Router();
const streamZoneController = require("../../../controllers/v1/admin/streamZone");

router
  .route("/")
  .get(streamZoneController.listStreamZone)
  .post(streamZoneController.createStreamZone);

router
  .route("/:streamZoneId")
  .get(streamZoneController.getStreamZone)
  .delete(streamZoneController.deleteStreamZone)
  .patch(streamZoneController.updateStreamZone);

module.exports = router;
