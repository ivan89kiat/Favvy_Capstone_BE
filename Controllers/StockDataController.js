require("dotenv").config();
const fetch = require("node-fetch");
class StockDataController {
  constructor(model) {
    this.model = model;
  }

  getStockData = async (req, res) => {
    const { symbol } = req.body;
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.STOCK_DATA_API_KEY}`;

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

  getAllStockData = async (req, res) => {
    try {
      const allData = await this.model.findAll();

      res.json(allData);
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = StockDataController;
