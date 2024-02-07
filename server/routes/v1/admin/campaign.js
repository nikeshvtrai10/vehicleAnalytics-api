const router = require("express").Router();
const campaignController = require("../../../controllers/v1/admin/campaign");

router
  .route("/")
  .get(campaignController.listCampaign)
  .post(campaignController.createCampaign);

router
  .route("/:campaignId")
  .get(campaignController.getCampaign)
  .delete(campaignController.deleteCampaign)
  .patch(campaignController.updateCampaign);

module.exports = router;
