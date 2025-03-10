import { Sequelize } from 'sequelize';
import "dotenv/config";
import UserModel from './models/user.js';
import AccountModel from './models/account.js';
import TransactionModel from './models/transaction.js';
import BudgetModel from './models/budget.js';
import CategoryModel from './models/category.js';

const DATABASE_URL = process.env.DATABASE_URL;

console.log({ DATABASE_URL });
export const sequelize = new Sequelize(DATABASE_URL, {
  define: { underscored: true, timestamps: true },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  dialect: 'postgres',
  logging: false
});

export const Users = UserModel(sequelize);
export const Accounts = AccountModel(sequelize);
export const Transactions = TransactionModel(sequelize);
export const Budgets = BudgetModel(sequelize);
export const Categories = CategoryModel(sequelize);

//: relations 
Users.hasOne(Accounts);
Users.hasMany(Budgets);
Users.hasMany(Transactions);
Accounts.hasMany(Transactions);
Categories.hasMany(Budgets);
Categories.hasMany(Transactions);

const database = {
  sequelize,
  Sequelize,
};

export default database;