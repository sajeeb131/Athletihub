const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    players:{
        type: String,
        required: true
    },
    time:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model("Sports", userSchema)