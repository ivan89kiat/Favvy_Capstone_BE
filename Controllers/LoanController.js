class LoanController {
  constructor(model) {
    this.model = model;
  }

  getUserLoan = async (req, res) => {
    try {
      const { userId } = req.params;
      const condition = { where: { user_id: userId } };
      const userLoans = await this.model.findAll(condition);
      return res.json(userLoans);
    } catch (error) {
      console.log(error.message);
    }
  };

  addLoan = async (req, res) => {
    try {
      const { userId } = req.params;
      const { title, interestRate, loanTerm, totalAmount } = req.body;

      const newLoan = await this.model.create({
        user_id: userId,
        title: title,
        interest: interestRate,
        amount: totalAmount,
        tenure: loanTerm,
      });
      return res.json(newLoan);
    } catch (error) {
      console.log(error.message);
    }
  };

  deleteLoan = async (req, res) => {
    try {
      const { selectedLoanId } = req.params;
      const deleteLoan = await this.model.destroy({
        where: { id: selectedLoanId },
      });
      return res.json({ message: "Loan deleted successfully" });
    } catch (error) {
      console.log(error.message);
    }
  };
}
module.exports = LoanController;
