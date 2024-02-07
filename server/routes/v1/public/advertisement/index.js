const express = require('express');

const router = new express.Router();

const advertisementRoute = require('./advertisement');

router.use('/advertisement', advertisementRoute);

module.exports = router;
