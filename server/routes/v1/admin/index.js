const agencyRoute = require("./agency");
const clientRoute = require("./client");
const campaignRoute = require("./campaign");
const advertisementRoute = require("./advertisement");
const displayRoute = require("./display");
const timeslotRoute = require("./timeslot");
const agencyMemberRoute = require("./agencyMember");
const deviceRoute = require("./device");
const streamRoute = require("./stream");
const streamZoneRoute = require("./streamZone");

const router = new require("express").Router();

router.use((req, res, next) => {
  const roles = req.decoded.roles;

  if (roles.includes("administrator")) {
    next();
  } else {
    res.status(403).json({
      message: "Action not permitted",
    });
  }
});

router.use("/agency", agencyRoute);
router.use("/client", clientRoute);
router.use("/campaign", campaignRoute);
router.use("/advertisement", advertisementRoute);
router.use("/display", displayRoute);
router.use("/timeslot", timeslotRoute);
router.use("/agencyMember", agencyMemberRoute);
router.use("/device", deviceRoute);
router.use("/stream", streamRoute);
router.use("/streamzone", streamZoneRoute);
module.exports = router;
