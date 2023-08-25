const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: String,
    date: Date,
    location: String,
    prizePool: Number,
})

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;