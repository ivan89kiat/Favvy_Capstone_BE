class HistoryRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:userId", this.controller.getUserHistory);
    router.post("/:userId", this.controller.createTransaction);
    router.put("/", this.controller.editTransaction);
    router.delete("/:selectedTransactionId", this.controller.deleteTransaction);
    return router;
  };
}

module.exports = HistoryRouter;
