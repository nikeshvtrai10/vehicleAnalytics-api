const express = require('express');

const router = new express.Router();

const overview = require('../../../controllers/v1/agency/overview');

router.route('/')
    .post(overview.getOverviewSummary);

router.route('/daily')
    .post(overview.getDailyReach);

router.route('/time')
    .post(overview.getPeakTime);

router.route('/day')
    .post(overview.getPeakDay);

router.route('/vehicletype')
    .post(overview.getVehicleType);

router.route('/dwelltime')
    .post(overview.getDwellTime);

module.exports = router;