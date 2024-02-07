const {
  Advertisement,
  sequelize,
  Timeslot,
  Display,
} = require("../../../../models");

const { ValidationError } = require("../../../../errors");

const moment = require("moment");

const { Op } = require("sequelize");
/**
 * Create a Advertisement
 * It will create a new Advertisement
 * @param queryObj
 * @returns {Promise<Advertisement>}
 */

// Checking for duplicate
module.exports = async (queryObj) => {
  const duplicateAdvertisement = await Advertisement.findOne({
    where: {
      videoUrl: queryObj.videoUrl,
    },
  });

  if (duplicateAdvertisement) {
    throw new ValidationError("Duplicate Advertisement", 403);
  }

  const displayExists = await Display.findOne({
    where: {
      id: queryObj.displayId,
    },
  });

  if (!displayExists) {
    throw new ValidationError("Invalid Display Id", 403);
  }

  const getDatesOfRange = (startDate, endDate, selectedDays) => {
    const dates = [];
    const momentStartDate = moment(startDate);
    const momentEndDate = moment(endDate);
    let currentDate = momentStartDate;
    while (currentDate.isSameOrBefore(momentEndDate)) {
      if (selectedDays.includes(currentDate.format("dddd"))) {
        dates.push(currentDate.format("YYYY-MM-DD"));
      }
      currentDate = currentDate.add(1, "day");
    }
    return dates;
  };

  const requiredDates = getDatesOfRange(
    queryObj.fromDate,
    queryObj.toDate,
    queryObj.showDays
  );
  const checkTimeslot = {
    [Op.and]: [
      {
        [Op.or]: [
          {
            startTime: {
              [Op.between]: [queryObj.startTime, queryObj.endTime],
            },
          },
          {
            endTime: {
              [Op.between]: [queryObj.startTime, queryObj.endTime],
            },
          },
          {
            [Op.and]: [
              {
                startTime: {
                  [Op.lte]: queryObj.startTime,
                },
              },
              {
                endTime: {
                  [Op.gte]: queryObj.endTime,
                },
              },
            ],
          },
          {
            [Op.and]: [
              {
                startTime: {
                  [Op.gte]: queryObj.startTime,
                },
              },
              {
                endTime: {
                  [Op.lte]: queryObj.endTime,
                },
              },
            ],
          },
        ],
      },
      {
        showDate: {
          [Op.in]: requiredDates,
        },
      },
    ],
  };

  const invalidTimeslot = await Timeslot.findOne({
    where: checkTimeslot,
  });

  if (invalidTimeslot) {
    throw new ValidationError("Invalid Timeslot");
  }

  // Starting Transaction
  const tr = await sequelize.transaction({
    autocommit: true,
  });

  const advertisement = await Advertisement.create(queryObj, {
    transaction: tr,
  });

  if (!advertisement) {
    await tr.rollback();
    throw new ValidationError("Unable to create a new advertisement", 500);
  }

  const requiredTimeslots = requiredDates.map((d) => {
    return {
      advertisementId: advertisement.dataValues.id,
      displayId: queryObj.displayId,
      startTime: queryObj.startTime,
      endTime: queryObj.endTime,
      showDate: d,
    };
  });

  const timeslot = await Timeslot.bulkCreate(requiredTimeslots, {
    transaction: tr,
  });

  if (!timeslot) {
    await tr.rollback();
    throw new ValidationError("Unable to create new timeslot");
  }

  await tr.commit();
  return advertisement;
};
