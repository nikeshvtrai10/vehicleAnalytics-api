const router = require("express").Router();
const displayController = require("../../../controllers/v1/agency/display");

router
  .route("/")
  .get(displayController.listDisplay)
  .post(displayController.createDisplay);

router
  .route("/:displayId")
  .get(displayController.getDisplay)
  .delete(displayController.deleteDisplay)
  .patch(displayController.updateDisplay);

module.exports = router;
