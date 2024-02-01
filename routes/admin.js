import express from "express";
import { redirectHome,redirectLogin } from "../middleware/autintacation_session.js";
const adminRouter = express.Router();

/* GET home page. */
adminRouter.get("/admin",redirectLogin, function (req, res, next) {
  res.render("admin/dashboard");
});

export default adminRouter;
