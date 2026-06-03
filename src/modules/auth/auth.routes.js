const {Router} = require('express');
const authController = require('./auth.controller');
const router=Router();
const Authorization = require("../../common/guard/authorization.guard");
router.post('/send-otp',authController.sendOtp)
router.post('/check-otp',authController.checkOtp)
router.get('/logout',Authorization,authController.logOut)
module.exports={
    authRouter:router
}