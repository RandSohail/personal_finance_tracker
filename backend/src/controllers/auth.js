import { hash } from 'bcrypt';
import { Users } from '../database/index.js';
import { httpStatus } from '../helpers/constants.js';

export default class AuthController {
  // // validation request.body, 
  // // hash password, 
  //  // create user, 
  // // back from the database, success, 
  // // if error handling error
  static async signUp(request, response) {
    try {
      const { name, email, password } = request.body;

      const hashedPassword = await hash(password, 10);

      const data = await Users.create({ name, email, password: hashedPassword })
      response.send("Sign Up Successfully")

    } catch (error) {
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