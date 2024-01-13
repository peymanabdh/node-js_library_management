import express from "express";
const returnBookRouter = express.Router();

/* GET home page. */
returnBookRouter.get("/admin/return-book", function (req, res, next) {
  res.render("admin/returnBook/return-book");
});
returnBookRouter.get("/admin/list-returned-book", function (req, res, next) {
  res.render("admin/returnBook/list-returned-book");
});

export default returnBookRouter;
