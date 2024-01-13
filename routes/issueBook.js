import express from "express";
const issueBookRouter = express.Router();

/* GET home page. */
issueBookRouter.get("/admin/issue-book", function (req, res, next) {
  res.render("admin/issue/issue-book");
});
issueBookRouter.get("/admin/list-issue", function (req, res, next) {
  res.render("admin/issue/list-issue");
});

export default issueBookRouter;
