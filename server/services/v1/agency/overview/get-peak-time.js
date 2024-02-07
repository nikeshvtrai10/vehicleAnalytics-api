const axios = require('axios');

/**
 * Get Overview summary report for all ads
 * It will get all the summary of the advertisements.
 * @param address
 * @param fromDate
 * @param toDate
 * @returns {Promise<data>}
 */
module.exports = async (address, fromDate, toDate) => {
    console.log(address, fromDate,toDate);
    let config = {
        headers: {
            clientId: 'adsinsight',
        }
      }

      console.log(config);
    const res = await axios.post(`http://${address}:5000/overview/time`, {
        from_date: fromDate,
        to_date: toDate,
    }, 
        config
    );
    const data = res.data;

    return data;
};