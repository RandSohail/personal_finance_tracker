import { Accounts } from "../database/index.js";
import { httpStatus } from "../helpers/constants.js";


export default class AccountController {
  static async getBalance(request, response, next) {
    try {
      const userId = request.cookies.userId;
      console.log({ userId });
      if (!userId) throw new Error("UNAUTHORIZED");

      const accountData = await Accounts.findOne({ where: { userId } });
      if (!accountData) throw new Error("Database Error");

      response.status(httpStatus.OK).json({ data: accountData.dataValues });

    } catch (error) {
      console.log(error);
      next(error)
    }
  }
}
