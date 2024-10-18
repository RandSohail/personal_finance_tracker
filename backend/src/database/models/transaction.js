import { DataTypes } from 'sequelize';

const TransactionModel = (sequelize) => {
  return sequelize.define('transaction', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accountId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['income', 'expense'],
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'transactions',
  });
};

export default TransactionModel;
