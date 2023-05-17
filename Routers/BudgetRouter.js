class BudgetRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.getBudgetCategories);
    router.get("/:userId", this.controller.getUserBudgets);
    router.post("/:userId", this.controller.createBudgets);
    router.put("/:userId", this.controller.editBudgets);
    router.delete(
      "/:userId/:budgetId/:selectedCategory/:spending",
      this.controller.deleteBudget
    );
    return router;
  };
}

module.exports = BudgetRouter;
