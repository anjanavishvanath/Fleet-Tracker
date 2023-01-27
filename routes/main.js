const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

// router.get('/', homeController.getIndex)
// router.get('/signup', authController.getSignup)
// router.get('/login', authController.getLogin)
// router.post('/signup', authController.postSignup)
// router.post('/login', authController.postLogin)

router.get('/', authController.getLanding)
router.get('/register', authController.getRegister)
router.post('/register', authController.postRegister)
router.post('/login', authController.postLogin)




module.exports = router