const express = require("express")
const {getGrounds, 
    getSponsoredGrounds, 
    createGround, 
    newSponsoredGround,
    updateGroundTimeSlots} = require('../controllers/grounds-controller')
const router = express.Router()

router.post('/', createGround)
router.patch('/:id', updateGroundTimeSlots)
router.post('/newsponsored/', newSponsoredGround)
router.get('/all/', getGrounds)
router.get('/sponsored/', getSponsoredGrounds)

module.exports = router