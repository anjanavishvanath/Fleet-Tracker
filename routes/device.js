const express = require('express')
const router = express.Router()
const deviceControllers = require('../controllers/tracker')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/',ensureAuth, deviceControllers.getDevice)
router.post('/new', deviceControllers.postDevice)
router.get('/:id', deviceControllers.getLocation)
router.post('/devicedata', deviceControllers.postLocation)
module.exports = router

