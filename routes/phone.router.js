const express = require('express');

//Setting up express router
const router = express.Router();
const phoneController = require('../controllers/phone.controller');

router.post('/generate-otp', phoneController.generateOtp);
router.post('/verify-otp', phoneController.verifyOtp);

//Exporting router
module.exports = router;