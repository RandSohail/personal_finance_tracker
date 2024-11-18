import { Op } from 'sequelize';
import { Budgets, Categories } from "../database/index.js";
import { httpStatus } from "../helpers/constants.js";
import moment from "moment";
export default class BudgetController {
  static async createBudget(request, response, next) {
    try {
      const { categoryId, limit, current_spending } = request.body;

      const userId = +request.cookies.userId;
      if (!userId) throw new Error("UnAuthorized");

      await Budgets.create({ userId, categoryId: +categoryId, limit, current_spending: +current_spending })

      response.status(httpStatus.OK).json({ message: "Successfully Added a Budget" });
    } catch (error) {
      console.log({ test: error.errors[0].message });
      if (error.name === "SequelizeUniqueConstraintError")
        response.status(httpStatus.BAD_REQUEST).json({ message: error.errors[0].message });
      else next(error);
    }
  }
  static async getCategoryBudgetsForCurrentWeek(request, response, next) {
    const userId = request.cookies.userId;
    const startOfWeek = moment().startOf("week").toDate();
    const endOfWeek = moment().endOf("week").toDate();

    try {
      const categories = await Categories.findAll({
        include: [
          {
            model: Budgets,
            attributes: ['limit', 'current_spending', 'createdAt'],
            where: {
              userId,
              createdAt: {
                [Op.between]: [startOfWeek, endOfWeek],
              },
            },
          },
        ],
      });

      if (categories.length != 0) {
        const data = categories.map((category) => {
          const limit = category.dataValues.budgets[0].dataValues.limit;
          const current_spending = category.dataValues.budgets[0].dataValues.current_spending;

          const tag = limit >= current_spending ? 'out of Budget' : 'in Budget';

          return {
            category: category.name,
            limit,
            current_spending,
            tags: [tag],
          };
        });
        response.json({ data })
      } else {
        response.json({ message: "No data found", data: [] })
      }

    } catch (error) {
      console.error("Error fetching category budgets:", error);
      next(error);
    }
  }
}
