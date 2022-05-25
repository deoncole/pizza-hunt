const router = require('express').Router();
// get all of the routes from the controller
const {
getAllPizza,
getPizzaById,
createPizza,
updatePizza,
deletePizza
} = require('../../controllers/pizza-controller');
const { create } = require('../../models/Pizza');

// Set up GET all and POST at /api/pizzas
router
  .route('/')
  .get(getAllPizza)
  .post(createPizza);

// Set up GET one, PUT, and DELETE at /api/pizzas/:id
router
  .route('/:id')
  .get(getPizzaById)
  .put(updatePizza)
  .delete(deletePizza);

module.exports = router;