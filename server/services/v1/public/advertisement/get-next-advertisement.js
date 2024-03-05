const {
    Client,
    Campaign,
    Advertisement,
    Timeslot
} = require("../../../../models");

const {
    ValidationError
} = require("../../../../errors");

const moment = require("moment");
/**
 * Get a Advertisement
 * It will get a Advertisement.
 * @param queryObj
 * @returns {Promise<Advertisement>}
 */
module.exports = async (requiredObj) => {
    const timeslot = await Timeslot.findAll({
        where: {
            displayId: requiredObj.displayId,
            startTime: requiredObj.startTime,
            endTime: requiredObj.endTime,
            showDate: moment().format("YYYY-MM-DD"),
            active: true,
        },
        include: [
            {
                as: 'Advertisements',
                model: Advertisement,
                include: [
                    {
                        as: 'AdCampaigns',
                        model: Campaign,
                        include: [
                            {
                                as: 'Clients',
                                model: Client,
                            },
                        ],
                    },
                ],
            },
        ],
    });

    if (!timeslot) {
        throw new ValidationError("Timeslot not found", 404);
    }

    return timeslot;
};