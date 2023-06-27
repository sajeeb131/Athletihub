const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    seller: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: false
    },
    type:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Item", userSchema);
