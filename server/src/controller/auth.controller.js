const Users = require("../model/user.model");
class AuthController {
  async index(req, res) {}

  //[POST /api/auth/register]
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const newUser = new Users({
        username: username,
        password: password,
        rules: 1,
      });

      await newUser.save();
      res.json({
        success: true,
        message: "registed !!",
        newUser,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
        newUser: null,
      });
    }
  }
}
module.exports = new AuthController();
