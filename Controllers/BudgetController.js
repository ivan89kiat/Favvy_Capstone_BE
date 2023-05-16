class BudgetController {
  constructor(model) {
    this.model = model;
  }

  getBudgetCategories = async (req, res) => {
    try {
      const budgetCategories = await this.model.findAll();
      return res.json(budgetCategories);
    } catch (error) {
      console.log(error.message);
    }
  };
}

module.exports = BudgetController;
