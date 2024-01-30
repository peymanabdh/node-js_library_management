import express from "express";
import { getIssueCtrl,getCategoryForIssueCtrl,createIssueCtrl } from "../controllers/issueCtrl.js";
const issueBookRouter = express.Router();

/* GET home page. */
issueBookRouter.get("/admin/issue-book",getIssueCtrl);
issueBookRouter.post("/admin/category-list-book",getCategoryForIssueCtrl);
issueBookRouter.post("/admin/issue-book",createIssueCtrl);
issueBookRouter.get("/admin/list-issue", function (req, res, next) {
  res.render("admin/issue/list-issue");
});

export default issueBookRouter;
