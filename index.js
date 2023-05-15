const express = require("express");
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const db = require("./db/models/index");

const { users } = db;
// const BankingRouter = require("./Routers/bankingRouter");

// const bankingRouter = new BankingRouter(express, axios).route();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const StockDataController = require("./Controllers/StockDataController");
const UserController = require("./Controllers/UserController");

const StockDataRouter = require("./Routers/StockDataRouter");
const UserRouter = require("./Routers/UserRouter");

const stockDataController = new StockDataController();
const userController = new UserController(users);

const checkJwt = auth({
  audience: process.env.DB_AUDIENCE,
  issuerBaseURL: process.env.DB_ISSUER_BASEURL,
});

const stockDataRouter = new StockDataRouter(
  stockDataController,
  express
).route();
const userRouter = new UserRouter(userController, express, checkJwt).route();

app.use("/api/stockdata", stockDataRouter);
app.use("/profile", userRouter);

app.listen(PORT, () => {
  console.log(`Application is listening to ${PORT}`);
});
