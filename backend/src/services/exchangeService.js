const axios = require("axios");
const config = require("../config/index");

const getLatestRatesFromService = async (baseCurrency) => {
  const res = await axios.get(
    `https://openexchangerates.org/api/latest.json?app_id=${appID}&base=${baseCurrency}`,
    {
      params: {
        baseCurrency: baseCurrency,
        appID: config.api.app_id,
      },
    }
  );
  return res.data;
};

const getHistoricalRatesFromService = async (date, baseCurrency) => {
  const res = await axios.get(
    `https://openexchangerates.org/api/historical/${date}.json?app_id=${appID}&base=${baseCurrency}`,
    {
      params: {
        date: date,
        baseCurrency: baseCurrency,
        appID: config.api.app_id,
      },
    }
  );
  return res.data;
};

module.exports = { getLatestRatesFromService, getHistoricalRatesFromService };
