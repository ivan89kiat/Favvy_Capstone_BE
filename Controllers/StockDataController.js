require("dotenv").config();
const axios = require("axios");
class StockDataController {
  constructor(model) {
    this.model = model;
  }

  getStockData = async (req, res) => {
    try {
      const { symbol } = req.params;
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&apikey=${process.env.STOCK_DATA_API_KEY}`;

      const response = await axios.get(url);

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate() - 5).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      const stockupdate = response.data["Time Series (Daily)"][formattedDate];

      const updatedStock = await this.model.update(
        {
          date: formattedDate,
          open: stockupdate["1. open"],
          close: stockupdate["4. close"],
        },
        { where: { symbol: symbol } }
      );
      console.log("stockDatas updated successfully");
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
