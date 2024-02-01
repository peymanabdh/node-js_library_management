import asyncHandler from "express-async-handler";
import Book from "../models/book.js";
import { Sequelize } from "sequelize";
import Category from "../models/category.js";
import Admin from "../models/admin.js";
import { redirectHome,redirectLogin } from "../middleware/autintacation_session.js";
const Op = Sequelize.Op;
export const getLoginCtrl = asyncHandler(async (req, res, next) => {
    res.render("login");
});


export const LoginToAppCtrl = asyncHandler(async (req, res, next) => {
    const adminFind = await Admin.findOne({
             where:{
                email:{
                    [Op.eq]:req.body.email
                },
                password:{
                    [Op.eq]:req.body.password
                }
             }
    });
    if(adminFind){
        req.session.isloggedIn = true;
        req.session.userId=adminFind.id;
        //console.log(req.session);
        //req.flash("success", "login successfuly");
        res.redirect("/admin/");
    }else{
        //req.flash("error", "admin not found");
        res.redirect("/admin/login");
    }
});