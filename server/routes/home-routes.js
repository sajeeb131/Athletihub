const express = require('express')
const {getEvents, submitEvent, getEvent, updateEventPlayers} = require('../controllers/home-controller')

const router = express.Router()

router.post('/',submitEvent)

router.get('/',getEvents)

router.get('/:id',getEvent)

router.patch('/:id',updateEventPlayers)

module.exports= router