const express = require('express')
const {getProfile} = require('../controllers/profile-controller')

router = express.Router()

router.get('/:id',getProfile)

module.exports = router