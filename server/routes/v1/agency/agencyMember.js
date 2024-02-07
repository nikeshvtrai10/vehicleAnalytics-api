const router = require("express").Router();
const agencyMemberController = require("../../../controllers/v1/agency/agencyMember");

router
  .route("/")
  .get(agencyMemberController.listAgencyMember)
  .post((req,res,next)=>{
    console.log('\n>>', req.body);
    next();
  },agencyMemberController.createAgencyMember);

router
  .route("/:agencyMemberId")
  .get(agencyMemberController.getAgencyMember)
  .delete(agencyMemberController.deleteAgencyMember)
  .patch(agencyMemberController.updateAgencyMember);

module.exports = router;
