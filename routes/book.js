import express from "express";
const bookRouter = express.Router();
import {
  getBookCtrl,
  sendPostBookCtrl,
  getListBookCtrl,
  editBookCtrl,
  saveEditedBookCtrl,
  deleteBookCtrl
} from "../controllers/bookCtrl.js";

/* GET home page. */
bookRouter
  .get("/admin/add-book", getBookCtrl)
  .post("/admin/add-book", sendPostBookCtrl);
bookRouter.get("/admin/list-book", getListBookCtrl);
bookRouter.get("/admin/edit-book/:bookId", editBookCtrl);
bookRouter.post("/admin/edit-book/:bookId", saveEditedBookCtrl);
bookRouter.post("/admin/delete-book/:bookId", deleteBookCtrl);
export default bookRouter;
