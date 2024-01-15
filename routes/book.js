import express from "express";
const bookRouter = express.Router();
import {
  getBookCtrl,
  sendPostBookCtrl,
  getListBookCtrl,
} from "../controllers/bookCtrl.js";

/* GET home page. */
bookRouter
  .get("/admin/add-book", getBookCtrl)
  .post("/admin/add-book", sendPostBookCtrl);
bookRouter.get("/admin/list-book", getListBookCtrl);
export default bookRouter;
