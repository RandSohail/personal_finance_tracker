import { DataTypes } from 'sequelize';

const AccountModel = (sequelize) => {
  return sequelize.define(('account'), {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.DECIMAL,
      defaultValue: 0.0,
    }
  }, {
    tableName: 'accounts',
  })
}

export default AccountModel;