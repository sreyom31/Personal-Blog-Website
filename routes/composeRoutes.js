const express = require('express');
const composeController = require('../controllers/composeController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.get("/compose", authMiddleware.requireAuth , composeController.compose_get);
router.post("/compose", composeController.compose_post);

module.exports = router;