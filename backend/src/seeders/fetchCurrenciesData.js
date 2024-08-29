const axios = require("axios");

const fetchCurrencyData = async () => {
  try {
    const res = await axios.get(
      "https://openexchangerates.org/api/currencies.json"
    );
    return res.data;
  } catch (error) {
    console.error("Error fetching currency data:", error);
    throw error;
  }
};

module.exports = fetchCurrencyData;
