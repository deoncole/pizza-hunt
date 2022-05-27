const router = require('express').Router();

// get all of the routes from the controller
const {addComment, removeComment, addReply, removeReply} = require('../../controllers/comment-controller');

// set up the POST route
router
.route('/:pizzaId')
.post(addComment);

// set up a PUT route
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)


// delect route
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

// set up the DELETE route
router.route('/:pizzaId/:commentId')
.delete(removeComment);

module.exports = router    