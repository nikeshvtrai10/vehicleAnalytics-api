const router = require("express").Router();
const reportAnalysisController = require("../../../controllers/v1/agency/reportAnalysis");

router
  .route("/")
  .post(reportAnalysisController.listReport)

router.route("/analytics")
  .post(reportAnalysisController.getAnalytics);


module.exports = router;
