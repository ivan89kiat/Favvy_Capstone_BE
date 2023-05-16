class BudgetRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/", this.controller.getBudgetCategories);

    // router.put("/", this.checkJwt, this.controller.editProfile);
    // router.put("/:userId", this.checkJwt, this.controller.updateUserGoal);
    return router;
  };
}

module.exports = BudgetRouter;
