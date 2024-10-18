import { DataTypes } from 'sequelize';

const BudgetModel = (sequelize) => {
  return sequelize.define(('budget'), {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    limit: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
    },
    current_spending: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
  }, {
    tableName: 'budgets',
  })
}

export default BudgetModel;