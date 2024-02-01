import express from "express";
import { redirectHome,redirectLogin } from "../middleware/autintacation_session.js";
const logoutRouter = express.Router();

/* GET home page. */
logoutRouter.get("/admin/logout",redirectLogin,(req,res,next)=>{
    req.session.destroy((error)=>{
            if(error){
                res.redirect("/admin");
            }
            console.log(req.session);
            res.redirect("/admin/login");
    });
});

export default logoutRouter;
