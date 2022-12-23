const router = require('express').Router();
const { update, deleteUser, getUser, getAllUser, sendFriendRequest } = require('../controllers/userController');

// Update User
router.put('/:id', update);

// Delete user
router.delete('/:id', deleteUser);

// Get a single user
router.get('/:id', getUser);



// Add a user as friend
router.put('/:id/addFriend', sendFriendRequest);


module.exports = router;