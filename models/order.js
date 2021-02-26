'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer)
    }
  };
  Order.init({
    CustomerId: DataTypes.INTEGER,
    ammount: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    }
  
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};