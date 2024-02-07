const express = require('express');

const router = new express.Router();

const streamRoute = require('./stream');

router.use('/stream', streamRoute);

module.exports = router;
