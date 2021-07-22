const express = require('express');
const aboutController = require('../controllers/aboutController');
const router = express.Router();

router.get("/about", aboutController.about_get);

module.exports = router;