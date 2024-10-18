import { DataTypes } from 'sequelize';

const CategoryModel = (sequelize) => {
  return sequelize.define(('category'), {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.CHAR,
      allowNull: false
    },
  }, {
    tableName: 'categorys',
  })
}

export default CategoryModel;