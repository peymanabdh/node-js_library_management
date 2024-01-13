import express from "express";
const currencyRouter = express.Router();

/* GET home page. */
currencyRouter.get("/admin/currency-settings", function (req, res, next) {
  res.render("admin/currency-settings");
});
// router.get("/admin/list-returned-book", function (req, res, next) {
//   res.render("admin/returnBook/list-returned-book");
// });

export default currencyRouter;
