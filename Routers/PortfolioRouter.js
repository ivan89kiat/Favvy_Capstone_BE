class PortfolioRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.get("/:userId", this.controller.getUserPortfolio);
    router.post("/:userId", this.controller.createPortfolio);
    router.put("/:userId/:selectedCompanyBE", this.controller.updatePortfolio);
    router.delete("/:selectedCompanyBE", this.controller.deletePortfolio);

    return router;
  };
}

module.exports = PortfolioRouter;
