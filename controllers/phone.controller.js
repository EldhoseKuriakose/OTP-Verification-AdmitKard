//Importing required packages or libraries
const Phone = require('../models/phone.model');
const mongoose = require('mongoose');

//Generating otp
module.exports.generateOtp = async function(req, res) {
    try {
        var phoneNum = await req.body.phone;
        //Generating otp
        var digits = '0123456789';
        var otp = '';
        for (let i = 0; i < 4; i++ ) { 
            otp += digits[Math.floor(Math.random() * 10)]; 
        }
        //Checking if phone number already in database
        var isExists = await Phone.findOne({phone: req.body.phone});
        //If exists update the otp
        if(isExists) {
            await Phone.updateOne(isExists,{
                otp: otp
            });
        } else {
            let user = await Phone.create({
                _id: new mongoose.Types.ObjectId(),
                phone: phoneNum,
                otp: otp
            });
    
            //Saving details to database
            user.save();
        }
        //Returning the generated otp
        return res.status(200).json({
            message: "success",
            otp: otp
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

//Verifying otp
module.exports.verifyOtp = async function(req, res) {
    try {
        var verifyOtp = await req.body.otp;
        //Finding phone number from db
        var phoneId = await Phone.findOne({phone: req.body.phone});
        if(phoneId) {
            //Verifying otp
            if(phoneId.otp === verifyOtp) {
                return res.status(200).json({
                    message: "success"
                });
            } else {
                //Otp doesn't match
                return res.status(422).json({
                    message: "Invalid Otp"
                });
            }
        } else {
            return res.status(404).json({
                message: "Error"
            });
        }
    } catch (err) {
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
