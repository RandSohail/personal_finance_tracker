import { Users, Accounts, Categorys, Budgets, Transactions } from './index.js';

export default async () => {
  await Users.bulkCreate([{
    // id: 1,
    name: 'Rand Sohail',
    email: 'randsohail98@gmail.com',
    password_hash: 'hashed_password_here'
  }, {
    name: "User 2 ",
    email: "user2@gmail.com",
    password_hash: "12345password"
  }]);

  await Accounts.create({
    userId: 1,
    balance: 10000.584
  })

  await Categorys.bulkCreate([{ name: "Food" }, { name: "Entertainment" }, { name: "Transportation" }, { name: "Utilities" }, { name: "Health" }, { name: "Clothing" }, { name: "Rent" }, { name: "Others" }]);

  await Budgets.bulkCreate([{ userId: 1, categoryId: 1, limit: 400, current_spending: 50 }, { userId: 1, categoryId: 3, limit: 200, current_spending: 25.75 }])

  await Transactions.create({
    userId: 1,
    accountId: 1,
    amount: 800,
    type: 'income',
    description: "pays from friend"
  })

  // eslint-disable-next-line no-console
  console.log("Finish the creation method");

};