const express = require('express');

const router = new express.Router();

const advertisement = require('../../../../controllers/v1/public/advertisement');

router.route('/').get(advertisement.getAdvertisement)

module.exports = router;
