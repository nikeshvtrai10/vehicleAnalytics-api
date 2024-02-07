const router = require("express").Router();
const agencyMemberController = require("../../../controllers/v1/admin/agencyMember");

router
  .route("/")
  .get(agencyMemberController.listAgencyMember)
  .post(agencyMemberController.createAgencyMember);

router
  .route("/:agencyMemberId")
  .get(agencyMemberController.getAgencyMember)
  .delete(agencyMemberController.deleteAgencyMember)
  .patch(agencyMemberController.updateAgencyMember);

module.exports = router;
