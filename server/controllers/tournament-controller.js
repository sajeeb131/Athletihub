const Tournament = require('../models/tournament-model');
const asyncHandler = require("express-async-handler");

const createTournament = asyncHandler( async (req, res)=>{
    const {name, date, location, prizePool} = req.body;
    if(!name || !date || !location || !prizePool){
        res.status(400);
        throw new Error("Please fill in all fields");
    }

    // Creating tournaments
    try{
    const tournament = await Tournament.create({
        name,
        date,
        location,
        prizePool
    });
        res.status(200).json(tournament);
    }catch(error){
        res.status(400).json({error: error.message})
    }
});

const getTournament = asyncHandler( async (req, res)=>{
    try{
        const tournaments = await Tournament.find({}).sort({createdAt: -1}).exec();
        res.status(200).json(tournaments);
    }catch(error){
        res.status(400).json({error: error.message});
    }
});

const getTournamentDetails = asyncHandler (async (req, res)=> {
    try{
        const tournament = await Tournament.findById(req.params.id);
        if(!tournament){
            res.status(404).send('Tournament not found');
        }else{
            res.json(tournament);
        }
    }catch(error){
        console.error(error);
        res.status(500).send("An error occured");
    }
})

module.exports = {
    createTournament,
    getTournament,
    getTournamentDetails,
}
