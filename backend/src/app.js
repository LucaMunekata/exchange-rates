const express = require("express");
const app = express();
const sequelize = require("./config/database");
const port = process.env.PORT || 5000;

app.use(express.json());

const Currency = require("./models/currency");
//const ExchangeRate = require('./models/exchangeRate');

const exchangeRoutes = require("./routes/exchangeRoutes");
app.use("/api/exchanges", exchangeRoutes);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Database & tables created");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

sequelize
  .authenticate()
  .then(() => {
    console.log(
      "Connection to the database has been established successfully."
    );
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

module.exports = app;
