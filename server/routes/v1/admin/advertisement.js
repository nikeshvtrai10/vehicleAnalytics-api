const router = require("express").Router();
const advertisementController = require("../../../controllers/v1/admin/advertisement");

router
  .route("/")
  .get(advertisementController.listAdvertisement)
  .post(advertisementController.createAdvertisement);

router
  .route("/:advertisementId")
  .get(advertisementController.getAdvertisement)
  .delete(advertisementController.deleteAdvertisement)
  .patch(advertisementController.updateAdvertisement);

module.exports = router;
