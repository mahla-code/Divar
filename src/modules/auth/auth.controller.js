const {AuthMessage} = require('./auth.messages');
const autoBind = require('auto-bind');
const authService = require('./auth.service');
const NodeEnv = require('../../common/constant/env.enum');
const CookieNames = require('../../common/constant/cookie.enum');
class AuthController{
    #service
    constructor(){
        autoBind(this);
        this.#service=authService;
        
    }
    async sendOtp(req,res,next) {
        try {
            const {mobile}=req.body;
           await this.#service.sendOtp(mobile);
            return res.json({
                message:AuthMessage.SendOtpSuccessfully
            })
        } catch (error) {
            next(error)
        }
    }
    async checkOtp(req,res,next) {
        try {
            const {mobile,code}=req.body;
           const token=await this.#service.checkOtp(mobile,code);
           return res.cookie(CookieNames.AccessToken,token,{
            httpOnly:true,
            secure:process.env.NODE_ENV===NodeEnv.Production
           }).status(200).json({
                message:AuthMessage.LoginSuccessfully
            })
        } catch (error) {
            next(error)
        }
    }
    async logOut(req,res,next) {
        try {
            return res.clearCookie(CookieNames.AccessToken).status(200).json({
            message: AuthMessage.LogoutSuccessfully})
        } catch (error) {
            next(error)
        }
    }
}
module.exports=new AuthController();