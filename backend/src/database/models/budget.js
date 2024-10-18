import { DataTypes } from 'sequelize';

const BudgetModel = (sequelize) => {
  return sequelize.define(('budget'), {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    limit: {
      type: DataTypes.DECIMAL,
      allowNull: false
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