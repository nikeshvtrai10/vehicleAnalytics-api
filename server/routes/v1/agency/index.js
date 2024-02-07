const clientRoute = require("./client");
const campaignRoute = require("./campaign");
const advertisementRoute = require("./advertisement");
const displayRoute = require("./display");
const agencyMemberRoute = require("./agencyMember");
const timeslotRoute = require("./timeslot");
const overviewRoute = require("./overview");

const router = new require("express").Router();

router.use((req, res, next) => {
  const roles = req.decoded.roles;
  console.log(req.decoded.roles);

  if (roles.includes("agency")) {
    next();
  } else {
    res.status(403).json({
      message: "Action not permitted",
    });
  }
});

router.use("/client", clientRoute);
router.use("/campaign", campaignRoute);
router.use("/advertisement", advertisementRoute);
router.use("/display", displayRoute);
router.use("/agencyMember", agencyMemberRoute);
router.use("/timeslot", timeslotRoute);
router.use("/overview", overviewRoute);

module.exports = router;
