const router = require('express').Router();
const { createPost } = require('../controllers/postController');

// Create a post
router.post('/', createPost);

// Update a post
// router.put('/:id', update);

// Delete a post
// router.delete('/:id', deletePost);

// Like a post
// router.put('/:id/like', likePost);

// Get a post
// router.get('/', getPost;

// Get all post
// router.get('/:id/unFriend', unfriendUser);



module.exports = router;