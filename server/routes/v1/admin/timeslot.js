const router = require("express").Router();
const timeslotController = require("../../../controllers/v1/admin/timeslot");

router
  .route("/")
  .get(timeslotController.listTimeslot)
  .post(timeslotController.createTimeslot);

router
  .route("/:timeslotId")
  .get(timeslotController.getTimeslot)
  .delete(timeslotController.deleteTimeslot)
  .patch(timeslotController.updateTimeslot);

module.exports = router;
