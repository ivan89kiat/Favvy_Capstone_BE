class StockDataRouter {
  constructor(stockDataController, express) {
    this.controller = stockDataController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.getStockData);

    return router;
  };
}

module.exports = StockDataRouter;
