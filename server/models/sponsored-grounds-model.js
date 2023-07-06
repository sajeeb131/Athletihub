const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    ownerName:{
        type: String,
        required:true
    },
    groundName:{
        type:String, 
        required: true
    },
    contact:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    gameHour:{
        type: Array,
        default: [],
        required: true
    },
    offers:{
        type: Array,
        default: [],
        required: false
    },
    noticeboard:{
        type: Array,
        default: [],
        required: false
    },
    aboutUs:{
        type: Array,
        default: [],
        required: true
    }
    
}, { timestamps: true })
module.exports = mongoose.model("SponsoredGrounds",userSchema)