class BalanceController {
  constructor(model) {
    this.model = model;
  }

  getUserBalance = async (req, res) => {
    try {
      const { userId } = req.params;
      const condition = { where: { user_id: userId } };
      const userBalance = await this.model.findAll(condition);
      return res.json(userBalance);
    } catch (error) {
      console.log(error.message);
    }
  };

  updateUserBalance = async (req, res) => {
    try {
      const { updatedBalance } = req.body;
      const { userId } = req.params;
      const condition = { where: { user_id: userId } };
      const updateBalance = await this.model.update(
        { amount: updatedBalance },
        condition
      );
      const userBalance = await this.model.findAll(condition);
      return res.json(userBalance);
    } catch (error) {
      console.log(error.message);
    }
  };
}
module.exports = BalanceController;
