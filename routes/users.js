import express from "express";
const usersRouter = express.Router();

/* GET home page. */
usersRouter.get("/admin/add-user", function (req, res, next) {
  res.render("admin/users/add-user");
});
usersRouter.get("/admin/list-users", function (req, res, next) {
  res.render("admin/users/list-users");
});

export default usersRouter;
