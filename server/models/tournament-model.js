const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
    name: String,
    game: String,
    date: Date,
    location: String,
    prizePool: String,
},{
    timestamps: true,
}
)

const Tournament = mongoose.model('Tournament', tournamentSchema);

module.exports = Tournament;