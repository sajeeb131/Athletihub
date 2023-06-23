const mongoose = require('mongoose')

const Schema = mongoose.mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    eventId:{
        type: String,
        required: true
    }
},{timestamps: true})

module.exports = mongoose.model('PlayersTracker', userSchema)