const router = require("express").Router();
const agencyController = require("../../../controllers/v1/admin/agency");

router
  .route("/")
  .get(agencyController.listAgency)
  .post(agencyController.createAgency);

router
  .route("/:agencyId")
  .get(agencyController.getAgency)
  .delete(agencyController.deleteAgency)
  .patch(agencyController.updateAgency);

module.exports = router;
