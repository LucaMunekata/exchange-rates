const sequelize = require("../config/database");
const Currency = require("../models/currency");
const fetchCurrencyData = require("./fetchCurrenciesData");

const seedingCurrencies = async () => {
  try {
    const currencyData = await fetchCurrencyData();
    const currencies = Object.entries(currencyData).map(([code, name]) => ({
      code,
      name,
    }));

    await Promise.all(currencies.map((currency) => Currency.upsert(currency)));

    console.log("Table seeded with currencies successfully");
  } catch (error) {
    console.error("Error seeding table", error);
  } finally {
    await sequelize.close();
  }
};

seedingCurrencies();
