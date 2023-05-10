require("dotenv").config();
const fetch = require("node-fetch");
class StockDataController {
  constructor(model) {
    this.model = model;
  }

  getStockData = async (req, res) => {
    const { symbol } = req.body;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${process.env.STOCK_DATA_API}`;

    try {
      const response = await fetch(url, {
        headers: { "User-Agent": "request" },
      });
      const data = await response.json();
      console.log(data);
      res.status(200).json(data);
    } catch (error) {
      console.log("Error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };
}

module.exports = StockDataController;
