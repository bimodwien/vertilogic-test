'use strict'

const router = require('express').Router()
const RestaurantController = require('../controllers/RestaurantController')
const DishController = require('../controllers/DishesController')

router.get('/restaurant', RestaurantController.show)
router.post('/restaurant', RestaurantController.add)
router.put('/restaurant/:id', RestaurantController.edit)
router.delete('/restaurant:/:id', RestaurantController.delete)

router.get('/dishes', DishController.show)

module.exports = router