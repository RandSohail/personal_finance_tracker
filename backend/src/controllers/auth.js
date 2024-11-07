import { hash, compare } from "bcrypt";
import { Users, Accounts } from "../database/index.js";
import { httpStatus } from "../helpers/constants.js";
export default class AuthController {
  static async signUp(request, response, next) {
    try {
      const { name, email, password } = request.body;

      const hashedPassword = await hash(password, 10);

      // TODO: check email if its already exist and handle the error
      const userData = await Users.create({ name, email, password: hashedPassword });
      await Accounts.create({ userId: userData.dataValues.id })
      response.send({ message: "SUCCESS SIGNUP" });
    } catch (error) {
      console.log({ test: error.errors[0].message });
      if (error.name === "SequelizeUniqueConstraintError")
        response.status(httpStatus.BAD_REQUEST).json({ message: error.errors[0].message });
      else next(error);
    }
  }

  static async login(request, response, next) {
    try {
      const { email, password } = request.body;

      const data = await Users.findOne({ where: { email } });
      if (!data) throw new Error('Incorrect email or password');

      const resultCompare = await compare(password, data.password)
      if (!resultCompare) throw new Error('Incorrect email or password');

      response.cookie('userId', data.dataValues.id, { httpOnly: true, secure: true });
      response.json({ message: "SUCCESS LOGIN" });
    } catch (error) {
      if (error.message) response.status(httpStatus.FORBIDDEN).json({ message: error.message })
      else next(error)
    }
  }

  forgetPassword() { }
  resetPassword() { }
  logout() { }
}
