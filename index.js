const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

// const BankingRouter = require("./Routers/bankingRouter");

// const bankingRouter = new BankingRouter(express, axios).route();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const StockDataController = require("./Controllers/StockDataController");

const StockDataRouter = require("./Routers/StockDataRouter");

const stockDataController = new StockDataController();

const stockDataRouter = new StockDataRouter(
  stockDataController,
  express
).route();

app.use("/api/stockdata", stockDataRouter);

app.listen(PORT, () => {
  console.log(`Application is listening to ${PORT}`);
});
