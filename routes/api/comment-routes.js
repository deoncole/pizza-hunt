const router = require('express').Router();

// get all of the routes from the controller
const {addComment, removeComment} = require('../../controllers/comment-controller');

// set up the POST route
router
.route('/:pizzaId')
.post(addComment);

// set up the DELETE route
router.route('/:pizzaId/:commentId')
.delete(removeComment);

module.exports = router    