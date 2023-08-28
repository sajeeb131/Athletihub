const express = require("express");
const {
  getGrounds,
  getTimeSlotsForGround, // Include the getTimeSlotsForGround function
  getSponsoredGrounds,
  createGround,
  newSponsoredGround,
  updateGroundTimeSlots,
} = require('../controllers/grounds-controller');
const router = express.Router();

router.post('/', createGround);
router.patch('/:id', updateGroundTimeSlots);
router.post('/newsponsored/', newSponsoredGround);
router.get('/all/', getGrounds);
router.get('/sponsored/', getSponsoredGrounds);
router.get('/groundprofile/:id', getTimeSlotsForGround); // Pass the controller function here

module.exports = router;
