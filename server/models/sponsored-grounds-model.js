const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    groundName:{
        type: String, 
        required: true
    }
    
}, { timestamps: true })

module.exports = mongoose.model("SponsoredGrounds",userSchema)