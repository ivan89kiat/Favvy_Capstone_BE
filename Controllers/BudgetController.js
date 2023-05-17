class BudgetController {
  constructor(model, categoryModel, historyModel, balanceModel) {
    this.model = model;
    this.categoryModel = categoryModel;
    this.historyModel = historyModel;
    this.balanceModel = balanceModel;
  }

  getBudgetCategories = async (req, res) => {
    try {
      const budgetCategories = await this.categoryModel.findAll();
      return res.json(budgetCategories);
    } catch (error) {
      console.log(error.message);
    }
  };

  getUserBudgets = async (req, res) => {
    try {
      const { userId } = req.params;
      const condition = { where: { user_id: userId } };
      const userBudgets = await this.model.findAll(condition);
      return res.json(userBudgets);
    } catch (error) {
      console.log(error.message);
    }
  };

  createBudgets = async (req, res) => {
    try {
      const { userId } = req.params;
      const { selectedCategoryId, amount } = req.body;
      const condition = {
        where: {
          user_id: userId,
          budgetCategory_id: selectedCategoryId,
          amount: amount,
        },
        defaults: { balance: 0 },
      };
      const userBudgets = await this.model.findOrCreate(condition);
      return res.json(userBudgets);
    } catch (error) {
      console.log(error.message);
    }
  };

  editBudgets = async (req, res) => {
    try {
      const { userId } = req.params;
      const { budgetId, amount, newBalance } = req.body;
      const condition = {
        where: {
          id: budgetId,
          user_id: userId,
        },
      };
      const userBudgets = await this.model.update(
        { amount: amount, balance: newBalance },
        condition
      );
      return res.json({ message: "Budget updated successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteBudget = async (req, res) => {
    try {
      const { userId, budgetId, selectedCategory, spending } = req.params;
      const deleteBudget = await this.model.destroy({
        where: { id: budgetId },
      });

      const deleteHistory = await this.historyModel.destroy({
        where: { category: selectedCategory, user_id: userId },
      });

      const userBalance = await this.balanceModel.findByPk(userId);
      const newBalance = Number(userBalance.amount) + parseFloat(spending);

      await this.balanceModel.update(
        { amount: newBalance },
        {
          where: { user_id: userId },
        }
      );
      return res.json({
        message: "Budget deleted successfully & balance updated successfully",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = BudgetController;
