const express = require("express");
const cors = require("cors");
const { auth } = require("express-oauth2-jwt-bearer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const db = require("./db/models/index");

const {
  users,
  goals,
  budgetCategories,
  histories,
  balances,
  budgets,
  portfolios,
  stockDatas,
} = db;
// const BankingRouter = require("./Routers/bankingRouter");

// const bankingRouter = new BankingRouter(express, axios).route();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const StockDataController = require("./Controllers/StockDataController");
const UserController = require("./Controllers/UserController");
const BudgetController = require("./Controllers/BudgetController");
const HistoryController = require("./Controllers/HistoryController");
const BalanceController = require("./Controllers/BalanceController");
const PortfolioController = require("./Controllers/PortfolioController");

const StockDataRouter = require("./Routers/StockDataRouter");
const UserRouter = require("./Routers/UserRouter");
const BudgetRouter = require("./Routers/BudgetRouter");
const HistoryRouter = require("./Routers/HistoryRouter");
const BalanceRouter = require("./Routers/BalanceRouter");
const PortfolioRouter = require("./Routers/PortfolioRouter");

const stockDataController = new StockDataController(stockDatas);
const userController = new UserController(users, goals);
const budgetController = new BudgetController(
  budgets,
  budgetCategories,
  histories,
  balances
);
const historyController = new HistoryController(histories, budgets);
const balanceController = new BalanceController(balances);
const portfolioController = new PortfolioController(
  portfolios,
  stockDatas,
  balances
);

const checkJwt = auth({
  audience: process.env.DB_AUDIENCE,
  issuerBaseURL: process.env.DB_ISSUER_BASEURL,
});

const stockDataRouter = new StockDataRouter(
  stockDataController,
  express
).route();
const userRouter = new UserRouter(userController, express, checkJwt).route();
const budgetRouter = new BudgetRouter(
  budgetController,
  express,
  checkJwt
).route();
const historyRouter = new HistoryRouter(
  historyController,
  express,
  checkJwt
).route();
const balanceRouter = new BalanceRouter(
  balanceController,
  express,
  checkJwt
).route();
const portfolioRouter = new PortfolioRouter(
  portfolioController,
  express,
  checkJwt
).route();

app.use("/api/stockdata", stockDataRouter);
app.use("/profile", userRouter);
app.use("/budget", budgetRouter);
app.use("/history", historyRouter);
app.use("/balance", balanceRouter);
app.use("/investment", portfolioRouter);

app.listen(PORT, () => {
  console.log(`Application is listening to ${PORT}`);
});
