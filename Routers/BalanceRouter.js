class BalanceRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:userId", this.controller.getUserBalance);
    router.put("/:userId", this.controller.updateUserBalance);
    // router.put("/:userId", this.checkJwt, this.controller.updateUserGoal);
    return router;
  };
}

module.exports = BalanceRouter;
