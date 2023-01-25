const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeControllers');

router.get('/', homeController.getIndex);
router.get('/register', homeController.getReg);

module.exports = router;