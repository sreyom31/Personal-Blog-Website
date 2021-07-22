const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

router.get("/posts/:postId", postController.post_get);

module.exports = router;