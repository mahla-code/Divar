const {Router} = require('express');
const authController = require('./auth.controller');
const router=Router();
const Authorization = require("../../common/guard/authorization.guard");
const rateLimit = require("express-rate-limit");
const otpLimiter = rateLimit({
    windowMs: 2 * 60 * 1000, 
    max: 3,                  
    message: { message: "تعداد درخواست‌های شما بیش از حد مجاز است، کمی صبر کنید" }
});
router.post('/send-otp',otpLimiter,authController.sendOtp)
router.post('/check-otp',authController.checkOtp)
router.get('/logout',Authorization,authController.logOut)
module.exports={
    authRouter:router
}