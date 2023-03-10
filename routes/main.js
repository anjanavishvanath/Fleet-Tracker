const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/', authController.getLanding)
router.get('/register', authController.getRegister)
router.post('/register', authController.postRegister)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)




module.exports = router