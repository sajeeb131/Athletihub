const express = require("express")

const router = express.Router()

router.post('/:id')
router.get('/all')
router.get('/sponsored')

module.exports = router