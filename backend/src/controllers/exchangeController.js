const {
  getLatestRatesFromService,
  getHistoricalRatesFromService,
} = require("../services/exchangeService");

const getLatestRates = async (req, res) => {
  const baseCurrency = req.query.baseCurrency || "USD";
  try {
    const rates = await getLatestRatesFromService("latest", baseCurrency);
    res.json(rates);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch latest rates" });
  }
};

const getHistoricalRates = async (req, res) => {
  const baseCurrency = req.query.baseCurrency || "USD";
  const date = req.query.date;
  try {
    const rates = await getHistoricalRatesFromService(
      "historical",
      date,
      baseCurrency
    );
    res.json(rates);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch historical rates" });
  }
};

module.exports = { getLatestRates, getHistoricalRates };
