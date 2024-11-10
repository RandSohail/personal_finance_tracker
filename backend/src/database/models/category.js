import { DataTypes } from 'sequelize';

const CategoryModel = (sequelize) => {
  return sequelize.define(('category'), {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    tableName: 'categories',
  })
}

export default CategoryModel;