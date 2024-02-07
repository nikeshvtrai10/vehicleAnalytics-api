const {
  Timeslot, Display, sequelize
} = require("../../../../models");

const moment = require('moment');

const {
  ValidationError
} = require("../../../../errors");

/**
 * Create a Timeslot
 * It will create a new Timeslot
 * @param queryObj
 * @returns {Promise<Timeslot>}
 */

module.exports = async (queryObj) => {
  const displayExists = await Display.findOne({
    where: {
      id: queryObj.displayId
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
      if (selectedDays.includes(currentDate.format('dddd'))) {
        dates.push(currentDate.format('YYYY-MM-DD'));
      }
      currentDate = currentDate.add(1, 'day');
    }
    return dates;
  };

  const requiredDates = getDatesOfRange(queryObj.fromDate, queryObj.toDate, queryObj.showDays);

  const tr = await sequelize.transaction({
    autocommit: true
  })

  const requiredTimeslots = []
  requiredDates.map((d) => {
    queryObj.timeslots.map((t) => {
      requiredTimeslots.push({
        advertisementId: queryObj.advertisementId,
        displayId: queryObj.displayId,
        startTime: t.startTime,
        endTime: t.endTime,
        showDate: d,
      });
    });
  });
    // requiredDates.map((d) => {
    //   return {
    //     advertisementId: queryObj.advertisementId,
    //     displayId: queryObj.displayId,
    //     startTime: queryObj.startTime,
    //     endTime: queryObj.endTime,
    //     showDate: d

    //   }
    // })

    console.log("req time", requiredTimeslots);

  const timeslot = await Timeslot.bulkCreate(requiredTimeslots, {
    transaction: tr
  })

  if (!timeslot) {
    await tr.rollback();
    throw new ValidationError("Unable to create new timeslot")
  }

  await tr.commit();

  // const timeslot = await Timeslot.create({ ...queryObj });
  // console.log(timeslot);

  return timeslot;
};