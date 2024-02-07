const router = require("express").Router();
const clientController = require("../../../controllers/v1/admin/client");

router
  .route("/")
  .get(clientController.listClient)
  .post(clientController.createClient);

router
  .route("/:clientId")
  .get(clientController.getClient)
  .delete(clientController.deleteClient)
  .patch(clientController.updateClient);

module.exports = router;
