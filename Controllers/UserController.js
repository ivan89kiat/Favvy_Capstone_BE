class UserController {
  constructor(model, goalModel) {
    this.model = model;
    this.goalModel = goalModel;
  }

  getOrCreate = async (req, res) => {
    try {
      const condition = {
        where: { email: req.body.userEmail },
      };
      const newProfile = await this.model.findOrCreate(condition);
      const profile = await this.model.findAll(condition);
      return res.json(profile);
    } catch (e) {
      console.log(e);
    }
  };

  editProfile = async (req, res) => {
    try {
      const { first_name, last_name, mobile, dobirth, userEmail } = req.body;

      const condition = { where: { email: userEmail } };
      const updatedProfile = await this.model.update(
        {
          first_name: first_name,
          last_name: last_name,
          mobile: mobile,
          dobirth: dobirth,
        },
        condition
      );
      const profile = await this.model.findAll(condition);
      res.json(profile);
    } catch (e) {
      console.log(e);
    }
  };

  getUserGoal = async (req, res) => {
    try {
      const { userId } = req.params;
      const condition = {
        where: { user_id: userId },
      };
      const userGoal = await this.goalModel.findAll(condition);

      return res.json(userGoal);
    } catch (e) {
      console.log(e);
    }
  };

  updateUserGoal = async (req, res) => {
    try {
      const { retirementAge, targetExpenses, estInflation } = req.body;
      const { userId } = req.params;
      const condition = {
        where: { user_id: userId },
      };
      const updateGoal = await this.goalModel.update(
        {
          retirement_age: retirementAge,
          target_expenses: targetExpenses,
          est_inflation: estInflation,
        },
        condition
      );
      const userGoal = await this.goalModel.findAll(condition);
      return res.json(userGoal);
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = UserController;
