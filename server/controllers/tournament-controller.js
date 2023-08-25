const Tournament = require('../models/tournament-model');
const asyncHandler = require("express-async-handler");

const createTournament = asyncHandler( async (req, res)=>{
    res.send("something");
});

const getTournament = asyncHandler( async (req, res)=>{
    res.send("getAll");
});

const getTournamentDetails = asyncHandler (async (req, res)=> {
    res.send("Get details");
})

module.exports = {
    createTournament,
    getTournament,
    getTournamentDetails,
}
