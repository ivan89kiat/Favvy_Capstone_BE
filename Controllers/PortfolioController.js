const axios = require("axios");
class PortfolioController {
  constructor(model, stockDatasModel, balanceModel) {
    this.model = model;
    this.stockDatasModel = stockDatasModel;
    this.balanceModel = balanceModel;
  }

  getUserPortfolio = async (req, res) => {
    try {
      const { userId } = req.params;
      const condition = {
        where: { user_id: userId },
        include: this.stockDatasModel,
      };
      const userPortfolio = await this.model.findAll(condition);

      return res.json(userPortfolio);
    } catch (error) {
      console.log(error.message);
    }
  };

  createPortfolio = async (req, res) => {
    try {
      const { userId } = req.params;
      const { selectedCompany } = req.body;
      const condition = {
        where: {
          symbol: selectedCompany,
        },
        defaults: { date: "", open: 0, close: 0 },
      };
      const stockdata = this.stockDatasModel.findOrCreate(condition);

      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${selectedCompany}&apikey=${process.env.STOCK_DATA_API_KEY}`;

      const response = await axios.get(url);

      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate() - 5).padStart(2, "0");

      const formattedDate = `${year}-${month}-${day}`;
      const stockupdate = response.data["Time Series (Daily)"][formattedDate];

      const createdStockData = await this.stockDatasModel.findAll({
        where: { symbol: selectedCompany },
      });
      console.log(createdStockData[0].id);
      const updatedStock = await this.stockDatasModel.update(
        {
          date: formattedDate,
          open: stockupdate["1. open"],
          close: stockupdate["4. close"],
        },
        { where: { symbol: selectedCompany } }
      );

      const userPortfolio = await this.model.create({
        user_id: userId,
        stockData_id: createdStockData[0].id,
      });

      return res.json(userPortfolio);
    } catch (error) {
      console.log(error.message);
    }
  };

  updatePortfolio = async (req, res) => {
    try {
      const { selectedCompanyBE, userId } = req.params;
      const { updatedUnits, totalSales, totalInvested } = req.body;
      const condition = { where: { id: selectedCompanyBE, user_id: userId } };

      const userPortfolio = await this.model.findByPk(selectedCompanyBE);

      const newPurchasingPrice =
        Number(totalInvested) > 0
          ? (
              (Number(userPortfolio.purchasePrice) *
                Number(userPortfolio.units) +
                Number(totalInvested)) /
              Number(updatedUnits)
            ).toFixed(2)
          : userPortfolio.purchasePrice;

      const updatePortfolio = await this.model.update(
        {
          units: updatedUnits,
          purchasePrice: newPurchasingPrice,
        },
        condition
      );

      const userBalance = await this.balanceModel.findByPk(userId);
      const newBalance =
        Number(userBalance.amount) + Number(totalSales) - Number(totalInvested);

      await this.balanceModel.update(
        {
          amount: newBalance,
        },
        { where: { user_id: userId } }
      );

      return res.json({
        message: "Portfolio updated successfully",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  deletePortfolio = async (req, res) => {
    try {
      const { selectedCompanyBE } = req.params;
      const deletePortfolio = await this.model.destroy({
        where: { id: selectedCompanyBE },
      });
      return res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = PortfolioController;
