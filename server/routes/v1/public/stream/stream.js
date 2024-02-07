const express = require('express');

const router = new express.Router();

const stream = require('../../../../controllers/v1/public/stream');

router.route('/').get(stream.getStreamByDevice)

module.exports = router;
