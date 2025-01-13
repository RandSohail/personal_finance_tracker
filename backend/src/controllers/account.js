import { Accounts } from "../database/index.js";
import { httpStatus, CustomError, messages } from "../helpers/index.js";


export default class AccountController {
  static async Balance(request, response, next) {
    try {
      const userId = request.cookies.authToken;
      if (!userId) throw new CustomError(messages.userIdNotExist, httpStatus.UNAUTHORIZED);

      const accountData = await Accounts.findOne({ where: { userId } });
      if (!accountData) throw new CustomError(messages.DataBase, httpStatus.INTERNAL_SERVER_ERROR);

      response.status(httpStatus.OK).json({ data: accountData.dataValues });

    } catch (error) {
      next(error)
    }
  }
}
