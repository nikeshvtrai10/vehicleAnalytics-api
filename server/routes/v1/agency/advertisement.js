const router = require("express").Router();
const advertisementController = require("../../../controllers/v1/agency/advertisement");
const uploaderMulter = require("../../../utils/uploader-multer");

router
  .route("/")
  .get(advertisementController.listAdvertisement)
  .post(
    uploaderMulter.fields([{
      name: 'video',
      maxCount: 1,
    }, ]),
    advertisementController.createAdvertisement
  );

router
  .route("/:advertisementId")
  .get(advertisementController.getAdvertisement)
  .delete(advertisementController.deleteAdvertisement)
  .patch(advertisementController.updateAdvertisement);

module.exports = router;