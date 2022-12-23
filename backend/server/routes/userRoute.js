const router = require('express').Router();
const { update, deleteUser } = require('../controllers/userController');

// Update User
router.put('/:id', update);

// Delete user
router.delete('/:id', deleteUser);


module.exports = router;