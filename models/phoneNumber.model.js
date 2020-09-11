//importing required packages
const mongoose = require('mongoose');

const phoneNumberSchema = new mongoose.Schema({
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Phone = mongoose.model('Phone', phoneNumberSchema);
//Exporting model
module.exports = Phone;