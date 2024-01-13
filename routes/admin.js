import express from "express";
const adminRouter = express.Router();

/* GET home page. */
adminRouter.get("/admin", function (req, res, next) {
  res.render("admin/dashboard");
});

export default adminRouter;
