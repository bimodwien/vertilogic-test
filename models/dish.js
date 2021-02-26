'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dish.belongsToMany(models.Order, {through: models.OrderDetail})
      Dish.hasMany(models.Order)
      Dish.belongsTo(models.Restaurant)
    }
  };
  Dish.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    RestaurantId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dish',
  });
  return Dish;
};