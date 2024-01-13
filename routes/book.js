import express from "express";
const bookRouter = express.Router();

/* GET home page. */
bookRouter.get("/admin/add-book", function (req, res, next) {
  res.render("admin/book/add-book");
});
bookRouter.get("/admin/list-book", function (req, res, next) {
  res.render("admin/book/list-book");
});
export default bookRouter;
