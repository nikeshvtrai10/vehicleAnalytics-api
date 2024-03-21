const httpStatus = require('http-status');

const overviewService = require('../../../../services/v1/agency/overview');

const { ValidationError } = require('../../../../errors');

require('dotenv').config();

module.exports = async (req, res, next) => {
  try {
    const reqPermission = 'overview.list';
    let address = process.env.BQ_API;
    if (req.decoded.permissions.includes(reqPermission)) {
      const fromDate = req.body.from_date;
      const toDate = req.body.to_date;
      const campaignId = req.body.campaign_id;
      const clientId = req.body.client_id;
      const displayId = req.body.display_id;
      if (fromDate && toDate) {
        const data = await overviewService.getDwellTime(
          address,
          fromDate,
          toDate,
          campaignId,
          clientId,
          displayId,
        );
        res.status(httpStatus.OK).json({
          message: 'Success',
          data,
        });
      } else {
        throw new ValidationError('Please provide from_date and to_date');
      }
    } else {
      throw new ValidationError('No Permission', req);
    }
  } catch (err) {
    next(err);
  }
};
