import asyncHandler from "express-async-handler";
import { Sequelize } from "sequelize";
import { check, query, validationResult } from "express-validator";
import User from "../models/user.js";
const Op = Sequelize.Op;

export const getUsersCtrl = asyncHandler(async (req, res, next) => {
  res.render("admin/users/add-user");
});
export const createAUsersCtrl = asyncHandler(async (req, res, next) => {
  await User.findOne({
    where: {
      email: {
        [Op.eq]: req.body.user_email,
      },
    },
  }).then((data) => {
    if (data) {
      req.flash("error", "email exists");
      res.redirect("/admin/add-user");
    } else {
      const validation = validationResult(req);
      const errMsg = [];
      validation.errors.forEach((element) => {
        errMsg.push(`${element.msg}  `);
      });
      if (validation.errors.length == 0) {
        User.create({
          name: req.body.user_name,
          email: req.body.user_email,
          mobile: req.body.user_mobile,
          gender: req.body.user_gender,
          address: req.body.user_addres,
          status: req.body.user_status,
        }).then((status) => {
          if (status) {
            req.flash("success", "User createded successfuly");
          } else {
            req.flash("error", "user not created");
          }
          res.redirect("/admin/add-user");
        });
      } else {
        req.flash("error", errMsg);
        res.redirect("/admin/add-user");
      }
    }
  });
});
export const getUserLists = asyncHandler(async (req, res, next) => {
  const Users = await User.findAll();
  res.render("admin/users/list-users", {
    users: Users,
  });
});

export const editUserCtrl = asyncHandler(async (req, res, next) => {
  const user_data = await User.findOne({
    where: {
      id: {
        [Op.eq]: req.params.userId,
      },
    },
  });
  // res.json(book_data);
  res.render("admin/users/edit-users", {
    users: user_data,
  });
});
export const saveEditedUserCtrl = asyncHandler(async (req, res, next) => {
  await User.update(
    {
      name: req.body.user_name,
      email: req.body.user_email,
      mobile: req.body.user_mobile,
      gender: req.body.user_gender,
      address: req.body.user_addres,
      status: req.body.user_status,
    },
    {
      where: {
        id: {
          [Op.eq]: req.params.userId,
        },
      },
    }
  ).then((status) => {
    if (status) {
      req.flash("success", "user has been updated");
    } else {
      req.flash("error", "user not updated");
    }
    res.redirect("/admin/edit-user/" + req.params.userId);
  });
});
export const deleteUserCtrl = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({
    where: {
      id: {
        [Op.eq]: req.params.userId,
      },
    },
  }).then((data) => {
    if (data) {
      User.destroy({
        where: {
          id: {
            [Op.eq]: req.body.user_id,
          },
        },
      }).then((status) => {
        if (status) {
          req.flash("success", "successfuly deleted");
          res.redirect("/admin/list-users/");
        } else {
          req.flash("error", "failed delete");
          res.redirect("/admin/list-users/");
        }
      });
    } else {
      req.flash("error", "invalid user id");
      res.redirect("/admin/list-users/");
    }
  });
});
