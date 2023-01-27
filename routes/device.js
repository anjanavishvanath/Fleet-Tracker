const express = require('express')
const router = express.Router()
const deviceControllers = require('../controllers/tracker')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/',ensureAuth, deviceControllers.getDevice)
router.get('/id', deviceControllers.getLocation)

module.exports = router