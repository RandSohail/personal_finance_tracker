import { Accounts, Transactions, Categories } from "../database/index.js";
import { CustomError, httpStatus, messages } from "../helpers/index.js";

export default class TransactionController {

  static async addTransaction(request, response, next) {
    try {
      const userId = +request.cookies.userId;
      if (!userId) throw new CustomError(messages.userIdNotExist, httpStatus.NOT_FOUND);

      const { type, categoryId, amount, description } = request.body;

      const accountData = await Accounts.findOne({ where: { userId } });
      if (!accountData) throw new CustomError(messages.AccountNoUserID, httpStatus.NOT_FOUND);

      await Transactions.create({
        userId,
        accountId: accountData.dataValues.id,
        categoryId: categoryId === undefined ? null : categoryId,
        amount,
        type,
        description,
      });

      let balance = Number(accountData.dataValues.balance);

      let newBalance = type === "income" ? balance += amount : balance -= amount;

      const [updatedRows] = await Accounts.update({ balance: newBalance }, { where: { userId } });
      if (updatedRows === 0) throw new CustomError(messages.AccountNoUserID, httpStatus.NOT_FOUND);

      response.status(httpStatus.OK).json({ message: "Successfully Added a Transaction" })
    } catch (error) {
      next(error)
    }
  }
  static async getAllTransactions(request, response, next) {
    try {
      const userId = request.cookies.userId;

      const data = await Categories.findAll({
        attributes: ["name"],
        include: [
          {
            model: Transactions,
            attributes: ['id', 'amount', 'type', "description"],
            where: {
              userId
            },
          },
        ],
      });
      const transformedData = data.flatMap(category => category.transactions.map(transaction => ({
        category: category.name,
        ...transaction.dataValues
      })));

      response.status(httpStatus.OK).json({ data: transformedData });
    } catch (error) {
      next(error)
    }
  }
}

const test = {
  "data": [
    {
      "id": 1,
      "name": "Food",
      "createdAt": "2024-11-11T10:31:42.978Z",
      "updatedAt": "2024-11-11T10:31:42.978Z",
      "transactions": [
        {
          "id": 49,
          "amount": "33",
          "type": "expense",
          "description": null
        },
        {
          "id": 2,
          "amount": "20",
          "type": "expense",
          "description": ""
        }
      ]
    }
  ]
}