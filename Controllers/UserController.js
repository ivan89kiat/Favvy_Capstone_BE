class UserController {
  constructor(model) {
    this.model = model;
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
}

module.exports = UserController;
