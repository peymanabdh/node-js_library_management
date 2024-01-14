import asyncHandler from "express-async-handler";
import Category from "../models/category.js";
import Sequelize from "sequelize";
const Op = Sequelize.Op;
// @desc    Create new category
// @route   POST /api/v1/categories
// @access  Private/Admin    getCategoryCtrl
//asyncHandler(async (req, res, next) => {
//res.render("admin/category/add-category");
// res.render("admin/category/add-category");
// res.json({
//   status: "success",
//   message: "Category list successfully",
// });
//});
//const category = await
export const getCategoryCtrl = asyncHandler(async (req, res, next) => {
  res.render("admin/category/add-category");
});
// export const postgetCategoryCtrl = asyncHandler(async (req, res, next) => {
//   const category = await Category.create({
//     name: req.body.name,
//     status: req.body.status,
//     }).then(() => {
//      const data =  res.json({
//         status: "success",
//         message: "Category created successfully",
//         category,
//       });
//       console.log(data);
//     }).then(()=>{
//       res.redirect("admin/category/add-category");
//     });
//   // res.redirect("/admin");
// });

export const postgetCategoryCtrl = (req, res, next) => {
  Category.findOne({
    where: {
      name: {
        [Op.eq]: req.body.name,
      },
    },
  }).then((data) => {
    if (data) {
      req.flash("error", "کتگوری با این نام وجود دارد");
      res.redirect("/admin/add-category");
    } else {
      Category.create({
        name: req.body.name,
        status: req.body.status,
      }).then((category) => {
        if (category) {
          req.flash("success", "با موفقیت ثبت شد");
          res.redirect("/admin/add-category");
        } else {
          req.flash("error", "خطایی رخ داده");
          res.redirect("/admin/add-category");
        }
      });
    }
  });
};
// res.redirect("/admin");

export const createCategoryCtrl = asyncHandler(async (req, res, next) => {
  const { name, status } = req.body;
  //category exists

  //create
  const category = await Category.create({
    name: req.body.name,
    status: req.body.status,
    //image: req?.file?.path,
  });
  res.json({
    status: "success",
    message: "Category created successfully",
    category,
  });
  res.render("admin/category/add-category");
});

// @desc    Get all categories
// @route   GET /api/categories
// @access  Public
