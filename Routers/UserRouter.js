class UserRouter {
  constructor(userController, express, checkJwt) {
    this.controller = userController;
    this.express = express;
    this.checkJwt = checkJwt;
  }
  route = () => {
    let router = this.express.Router();

    router.post("/", this.checkJwt, this.controller.getOrCreate);
    router.put("/", this.checkJwt, this.controller.editProfile);
    router.get("/:userId", this.controller.getUserGoal);
    router.put("/:userId", this.checkJwt, this.controller.updateUserGoal);
    return router;
  };
}

module.exports = UserRouter;
