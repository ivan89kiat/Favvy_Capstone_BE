class HistoryController {
  constructor(model, budgetModel) {
    this.model = model;
    this.budgetModel = budgetModel;
  }

  getUserHistory = async (req, res) => {
    try {
      const { userId } = req.params;
      const condition = {
        where: { user_id: userId },
      };
      const userHistory = await this.model.findAll(condition);

      return res.json(userHistory);
    } catch (error) {
      console.log(error.message);
    }
  };

  createTransaction = async (req, res) => {
    try {
      const {
        editedTransactionAmount,
        selectedCategory,
        selectedType,
        date,
        selectedCategoryId,
      } = req.body;
      const { userId } = req.params;
      const newTransaction = await this.model.create({
        user_id: userId,
        amount: editedTransactionAmount,
        category: selectedCategory,
        type: selectedType,
        date: date,
      });

      const condition = {
        where: { budgetCategory_id: selectedCategoryId, user_id: userId },
        defaults: { amount: 0, balance: 0 },
      };
      const [findOrCreateBudget, created] = await this.budgetModel.findOrCreate(
        condition
      );
      if (created) {
        console.log("New budget created");
      } else {
        console.log("Budget already exists");
      }
      return res.json(newTransaction);
    } catch (error) {
      console.log(error.message);
    }
  };

  editTransaction = async (req, res) => {
    try {
      const {
        editedTransactionAmount,
        selectedCategory,
        selectedType,
        date,
        selectedTransactionId,
      } = req.body;

      const condition = { where: { id: selectedTransactionId } };
      const updatedTransaction = await this.model.update(
        {
          amount: editedTransactionAmount,
          category: selectedCategory,
          type: selectedType,
          date: date,
        },
        condition
      );
      res.json({ message: "Transaction updated successfully" });
    } catch (e) {
      console.log(e);
    }
  };

  deleteTransaction = async (req, res) => {
    try {
      const { selectedTransactionId } = req.params;
      const deleteTransaction = await this.model.destroy({
        where: { id: selectedTransactionId },
      });
      return res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = HistoryController;
