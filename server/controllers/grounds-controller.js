const Grounds = require('../models/grounds-model')
const SponsoredGrounds = require("../models/sponsored-grounds-model")


const getGrounds = async(req, res) =>{
    try{
        const _grounds = await Grounds.find({}).sort({createdAit: -1})
        res.status(200).json(_grounds)
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

const getSponsoredGrounds = async (req, res) => {
    try {
      const _sponsoredGrounds = await SponsoredGrounds.find({});
      const groundNames = _sponsoredGrounds.map((ground) => ground.groundName);
      const __sponsoredGrounds = await Grounds.find({
        groundName: { $in: groundNames },
      });
      res.status(200).json(__sponsoredGrounds)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  };

  const createGround = async (req, res) => {
    const { ownerName, groundName, location, image, contact, details } = req.body;
  
    // Perform validation checks
    if (!ownerName || !groundName || !location || !contact || !details) {
      return res.status(400).json({ error: 'Please fill in all the required fields.' });
    }
  
    try {
      const newGround = await Grounds.create({
        ownerName,
        groundName,
        location,
        image,
        contact,
        details,
      });
  
      res.status(200).json(newGround);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  const updateGroundTimeSlots = async (req, res) => {
    const { id } = req.params;
    const { gameHour } = req.body;
  
    // Perform validation checks
    if (!gameHour) {
      return res.status(400).json({ error: 'Please provide time slots for the ground.' });
    }
    try {
      const ground = await Grounds.findById(id);
  
      if (!ground) {
        return res.status(404).json({ error: 'Ground not found.' });
      }
  
      ground.gameHour = gameHour;
      const updatedGround = await ground.save();
  
      res.status(200).json(updatedGround);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };  

const newSponsoredGround = async(req, res) =>{
    const {id, groundName} = req.body
   
    let emptyFields = []
    if(!id || !groundName){
        emptyFields.push('Fill in the required fields.')
    }
    if(emptyFields.length>0){
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }
    
    try{
        const playground = await SponsoredGrounds.create({id, groundName })
        res.status(200).json(playground)
    }catch(error){
        res.status(400).json({error: error.message})
    }
} 
const getTimeSlotsForGround = async (req, res) => {
  const { id } = req.params;

  try {
    const ground = await Grounds.findById(id);
    if (!ground) {
      return res.status(404).json({ error: 'Ground not found.' });
    }

    const timeSlots = ground.gameHour; // Assuming the time slots are stored in the gameHour field
    res.status(200).json(timeSlots);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {getGrounds, getTimeSlotsForGround, getSponsoredGrounds, createGround, newSponsoredGround,updateGroundTimeSlots}