'use strict'

const { Restaurant } = require('../models/index')

class RestaurantController {
  static async show(req, res, next) {
    try {
      const data = await Restaurant.findAll()
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async add(req, res, next) {
    try {
      let params = {
        name: req.body.name
      }
      const data = await Restaurant.create(params)
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async edit(req, res, next) {
    try {
      let params = {
        name: req.body.name
      }
      const data = await Restaurant.update(params, {
        where: {
          id: req.params.id
        }
      })
      res.status(200).json(data)
    } catch (error) {
      next(error)
    }
  }

  static async delete(req, res, next) {
    try {
      const data = await Restaurant.destroy({
        where: {
          id: req.params.id
        }
      })
      res.status(200).json({msg: "Restaurant has been deleted"})
    } catch (error) {

    }
  }

}

module.exports = RestaurantController