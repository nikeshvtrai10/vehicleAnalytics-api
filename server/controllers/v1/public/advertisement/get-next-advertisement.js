const httpStatus = require('http-status');

const advertisementService = require('../../../../services/v1/public/advertisement');

module.exports = async (req, res, next) => {
  let requiredObj = {
    displayId: req.query.displayId,
    startTime: req.query.startTime,
    endTime: req.query.endTime
  }
  try {
    const data = await advertisementService.getAdvertisement(requiredObj);
    res.status(httpStatus.OK).json({
      message: 'Success',
      data,
    });
  } catch (err) {
    next(err);
  }
};
