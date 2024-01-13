import express from "express";
const daysSettingRouter = express.Router();
/* GET home page. */
daysSettingRouter.get("/admin/days-settings", function (req, res, next) {
  res.render("admin/days-settings");
});
// router.get("/admin/list-returned-book", function (req, res, next) {
//   res.render("admin/returnBook/list-returned-book");
// });

export default daysSettingRouter;
