const router = require("express").Router();
const streamController = require("../../../controllers/v1/admin/stream");

router
  .route("/")
  .get(streamController.listStream)
  .post(streamController.createStream);

router
  .route("/:streamId")
  .get(streamController.getStream)
  .delete(streamController.deleteStream)
  .patch(streamController.updateStream);

module.exports = router;
