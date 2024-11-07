import { Users } from "../database/index.js";
import { httpStatus } from "../helpers/constants.js";


export default class UserController {

  static async userData(request, response, next) {
    try {
      const userId = request.cookies.userId;
      if (!userId) throw new Error("UNAUTHORIZED");

      const userData = await Users.findOne({ where: { id: userId } });
      if (!userData) throw new Error("Database Error");

      response.status(httpStatus.OK).json({
        data: {
          id: userData.dataValues.id,
          name: userData.dataValues.name,
          email: userData.dataValues.email
        }
      });

    } catch (error) {
      next(error)
    }
  }
}
