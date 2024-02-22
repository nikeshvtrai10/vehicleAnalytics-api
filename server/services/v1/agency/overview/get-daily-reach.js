const axios = require('axios');

/**
 * Get Overview summary report for all ads
 * It will get all the summary of the advertisements.
 * @param address
 * @param fromDate
 * @param toDate
 * @returns {Promise<data>}
 */
module.exports = async (address, fromDate, toDate, campaignId, client_id) => {
    console.log(address, fromDate, toDate, campaignId, client_id);
    let config = {
        headers: {
            clientId: 'adsinsight',
        }
      }

      console.log(config);
    const res = await axios.post(`http://${address}:5001/overview/daily`, {
        from_date: fromDate,
        to_date: toDate,
        campaign_id: campaignId,
        client_id: client_id,
    }, 
        config
    );
    const data = res.data;

    return data;
};