import { hash, compare } from "bcrypt";
import { Users, Accounts } from "../database/index.js";
import { SendEmail, CustomError, messages, httpStatus, signToken, verifyToken } from "../helpers/index.js"
export default class AuthController {
  static async signUp(request, response, next) {
    try {
      const { name, email, password } = request.body;
      const hashedPassword = await hash(password, 10);

      const userData = await Users.create({ name, email, password: hashedPassword });
      console.log({ userData });
      await Accounts.create({ userId: userData.dataValues.id });
      response.cookie('authToken', userData.dataValues.id, { secure: true }).json({ message: "SUCCESS SIGNUP" });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError")
        response.status(httpStatus.BAD_REQUEST).json({ message: error.errors[0].message });
      else next(error);
    }
  }

  static async login(request, response, next) {
    try {
      const { email, password } = request.body;

      const data = await Users.findOne({ where: { email } });
      if (!data) throw new CustomError(messages.UserNotExist, httpStatus.NOT_FOUND);

      const resultCompare = await compare(password, data.password);
      if (!resultCompare) throw new CustomError(messages.UNAUTHORIZED, httpStatus.UNAUTHORIZED);

      response.cookie('authToken', data.dataValues.id, { secure: true }).json({ message: "SUCCESS LOGIN" });
    } catch (error) {
      next(error)
    }
  }

  //? Send email to the user
  static async forgetPassword(request, response, next) {
    try {
      const { email } = request.body;

      const data = await Users.findOne({ where: { email } });
      if (!data) throw new CustomError(messages.UserNotExist, httpStatus.NOT_FOUND);

      const { id, name } = data;

      const token = await signToken({ id, name, email }, { expiresIn: '1h' });

      const link = `http://localhost:3001/api/v1/auth/reset-password/${token}`;

      await SendEmail({ email, link });

      response.status(httpStatus.OK).send({ message: "Send Email Successfully" })
    } catch (error) {
      next(error)
    }
  }

  //? Verify token then redirect to the reset password page 
  static async resetPasswordEmail(request, response, next) {
    try {
      const { token } = request.params;
      await verifyToken(token);

      response
        .status(httpStatus.REDIRECT)
        .cookie("resetPasswordToken", token, {
          httpOnly: true,
          sameSite: 'none',
          secure: true,
        })
        .redirect("http://localhost:3000/reset-password");
    } catch (error) {
      next(error)
    }
  }
  //? post request to reset the password
  static async resetPassword(request, response, next) {
    try {
      const { resetPasswordToken } = request.cookies;
      if (!resetPasswordToken) throw new CustomError("Invalid Token", httpStatus.UNAUTHORIZED);

      const { password } = request.body;
      const hashedPassword = await hash(password, 10);

      const { id } = await verifyToken(resetPasswordToken);

      const [updatedRows] = await Users.update({ password: hashedPassword }, { where: { id } });
      if (updatedRows === 0) throw new CustomError(messages.AccountNoUserID, httpStatus.NOT_FOUND);

      response.status(httpStatus.OK).json({ message: "Reset Password Successfully" })
    } catch (error) {
      next(error);
    }
  }

  static logout(_request, response, _next) {
    response.status(httpStatus.OK).clearCookie("auth").json({ message: "LogOut Successfully" })
  }
}
