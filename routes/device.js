const express = require('express')
const router = express.Router()
const deviceControllers = require('../controllers/tracker')
const { ensureAuth, ensureGuest } = require("../middleware/auth")

router.get('/',ensureAuth, deviceControllers.getDevice)
router.post('/new', deviceControllers.postDevice)
router.get('/:id', deviceControllers.getLocation)

//dose not work
router.get('/devicedata', deviceControllers.postLocation)

module.exports = router

