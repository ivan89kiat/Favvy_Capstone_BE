class PortfolioRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:userId", this.controller.getUserLoan);
    router.post("/:userId", this.controller.addLoan);
    router.delete("/:selectedLoanId", this.controller.deleteLoan);
    // router.put("/:userId/:selectedCompanyBE", this.controller.updatePortfolio);
    return router;
  };
}

module.exports = PortfolioRouter;
