import express from "express";
import { getUsersCtrl,getUserForReturnCtrl,updateReturnedBookByUserCtrl } from "../controllers/returnBookCtrl.js";
const returnBookRouter = express.Router();

/* GET home page. */
returnBookRouter.get("/admin/return-book", getUsersCtrl);
returnBookRouter.post("/admin/return-book", updateReturnedBookByUserCtrl);
returnBookRouter.post("/admin/return-user-list", getUserForReturnCtrl);
returnBookRouter.get("/admin/list-returned-book", function (req, res, next) {
  res.render("admin/returnBook/list-returned-book");
});

export default returnBookRouter;
