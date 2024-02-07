const httpStatus = require('http-status');

const streamService = require('../../../../services/v1/public/stream');

module.exports = async (req, res, next) => {
  let deviceId = req.query.deviceId;
  try {
    const data = await streamService.getStreamByDevice(deviceId);
    res.status(httpStatus.OK).json({
      message: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};
