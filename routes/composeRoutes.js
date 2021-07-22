const express = require('express');
const composeController = require('../controllers/composeController');
const router = express.Router();

router.get("/compose", composeController.compose_get);
router.post("/compose", composeController.compose_post);

module.exports = router;