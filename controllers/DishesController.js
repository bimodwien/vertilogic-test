'use strict'

const {Dish} = require('../models/index')

class DishController {
  static async show(req, res, next) {
    try {
      const data = await Dish.findAll({
        include: ['Restaurant']
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = DishController