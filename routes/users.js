import express from "express";
import { body, check, query, validationResult } from "express-validator";
const usersRouter = express.Router();
import {
  getUsersCtrl,
  createAUsersCtrl,
  getUserLists,
  editUserCtrl,
  saveEditedUserCtrl,
  deleteUserCtrl,
} from "../controllers/userCtrl.js";
/* GET home page. */
usersRouter.get("/admin/add-user", getUsersCtrl);
usersRouter.post(
  "/admin/add-user",
  [
    body("user_name").not().isEmpty().withMessage("username not can empty"),
    body("user_email")
      .not()
      .isEmpty()
      .withMessage("email not can empty")
      .isEmail()
      .withMessage("please insert real email"),
  ],
  createAUsersCtrl
);

usersRouter.get("/admin/list-users", getUserLists);
usersRouter.get("/admin/edit-user/:userId", editUserCtrl);
usersRouter.post("/admin/edit-user/:userId", saveEditedUserCtrl);
usersRouter.post("/admin/delete-user/:userId", deleteUserCtrl);

export default usersRouter;
