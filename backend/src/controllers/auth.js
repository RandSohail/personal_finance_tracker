import { hash } from 'bcrypt';
import { Users } from '../database/index.js';
import { httpStatus } from '../helpers/constants.js';
// TODO: check email if its already exist and handle the error 
export default class AuthController {
  static async signUp(request, response) {
    try {
      const { name, email, password } = request.body;

      const hashedPassword = await hash(password, 10);

      const data = await Users.create({ name, email, password: hashedPassword });
      response.send({ message: "SUCCESS SIGNUP" })

    } catch (error) {
      console.log({ test: error.errors[0].message });
      if (error.name === "SequelizeUniqueConstraintError") response.status(httpStatus.BAD_REQUEST).json({ message: error.errors[0].message })
      else response.status(500).json({ errormessage: "An error occurred", error })
    }
  }

  login() {

  }
  forgetPassword() {

  }
  resetPassword() {

  }
  logout() {

  }
}