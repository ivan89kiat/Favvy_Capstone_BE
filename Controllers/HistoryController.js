class HistoryController {
  constructor(model) {
    this.model = model;
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
      const { editedTransactionAmount, selectedCategory, selectedType, date } =
        req.body;
      const { userId } = req.params;
      const newTransaction = await this.model.create({
        user_id: userId,
        amount: editedTransactionAmount,
        category: selectedCategory,
        type: selectedType,
        date: date,
      });
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
      const { selectedTransactionId } = req.body;
      const deleteTransaction = await this.model.destroy({
        where: { id: selectedTransactionId },
      });
      return res.json({ message: "Transaction deleted successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };

  // getUserGoal = async (req, res) => {
  //   try {
  //     const { userId } = req.params;
  //     const condition = {
  //       where: { user_id: userId },
  //     };
  //     const userGoal = await this.goalModel.findAll(condition);

  //     return res.json(userGoal);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // updateUserGoal = async (req, res) => {
  //   try {
  //     const { retirementAge, targetExpenses, estInflation } = req.body;
  //     const { userId } = req.params;
  //     const condition = {
  //       where: { user_id: userId },
  //     };
  //     const updateGoal = await this.goalModel.update(
  //       {
  //         retirement_age: retirementAge,
  //         target_expenses: targetExpenses,
  //         est_inflation: estInflation,
  //       },
  //       condition
  //     );
  //     const userGoal = await this.goalModel.findAll(condition);
  //     return res.json(userGoal);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
}

module.exports = HistoryController;
