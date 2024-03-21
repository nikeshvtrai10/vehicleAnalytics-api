const { Stream, StreamZone } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Stream
 * It will get a Stream.
 * @param queryObj
 * @returns {Promise<Stream>}
 */
module.exports = async (deviceId) => {
    const stream = await Stream.findOne({
        where: {
            deviceId,
            active: true,
        },
        include: [{
            as: "StreamZones",
            model: StreamZone
        }]
    });
    if (!stream) {
        throw new ValidationError("Unable to find the stream", 404);
    }

    return stream;
};