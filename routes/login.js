import express from "express";
import { getLoginCtrl,LoginToAppCtrl } from "../controllers/loginCtrl.js";
import { redirectHome,redirectLogin } from "../middleware/autintacation_session.js";
const loginRouter = express.Router();

/* GET home page. */
loginRouter.get("/admin/login",redirectHome, getLoginCtrl);
loginRouter.post("/admin/login", LoginToAppCtrl);
export default loginRouter;
