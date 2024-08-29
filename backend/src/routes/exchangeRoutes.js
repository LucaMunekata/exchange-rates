const express = require("express");
const router = express.Router();
const {
  getLatestRates,
  getHistoricalRates,
} = require("../controllers/exchangeController");

router.get("/latest", getLatestRates);
router.get("/historical", getHistoricalRates);

module.exports = router;
