//importing required packages
const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    },
    otp: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

const Phone = mongoose.model('Phone', phoneSchema);
//Exporting model
module.exports = Phone;