'use strict'

const router = require('express').Router()
const RestaurantController = require('../controllers/RestaurantController')

router.get('/restaurant', RestaurantController.show)
router.post('/restaurant', RestaurantController.add)
router.put('/restaurant/:id', RestaurantController.edit)
router.delete('/restaurant:/:id', RestaurantController.delete)


module.exports = router