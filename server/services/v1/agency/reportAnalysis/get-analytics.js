const axios = require('axios');

/**
 * Get Overview summary report for all ads
 * It will get all the summary of the advertisements.
 * @param address
 * @param fromDate
 * @param toDate
 * @returns {Promise<data>}
 */
module.exports = async (address, fromDate, toDate, campaignId, client_id, advertisementId) => {
    console.log(address, fromDate, toDate, campaignId, client_id, advertisementId);
    let config = {
        headers: {
            clientId: 'adsinsight',
        }
      }
      
      console.log(config);

    const res1 = await axios.post(`http://${address}:5000/report`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
        advertisement_id: advertisementId,
    }, 
        config
    );

    const res2 = await axios.post(`http://${address}:5000/report/daily`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
        advertisement_id: advertisementId,
    }, 
        config
    );

    const res3 = await axios.post(`http://${address}:5000/report/day`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
        advertisement_id: advertisementId,
    }, 
        config
    );

    const res4 = await axios.post(`http://${address}:5000/report/time`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
        advertisement_id: advertisementId,
    }, 
        config
    );

    const res5 = await axios.post(`http://${address}:5000/report/vehicletype`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
        advertisement_id: advertisementId,
    }, 
        config
    );

    const res6 = await axios.post(`http://${address}:5000/report/dwelltime`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
        advertisement_id: advertisementId,
    }, 
        config
    );


    return {overviewData: res1.data, daily: res2.data, day: res3.data, time: res4.data, vehicleType: res5.data, dwellTime: res6.data};
};