class StockDataRouter {
  constructor(stockDataController, express) {
    this.controller = stockDataController;
    this.express = express;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.getStockData);
    router.get("/all", this.controller.getAllStockData);
    return router;
  };
}

module.exports = StockDataRouter;
