import asyncHandler from "express-async-handler";
import Category from "../models/category.js";

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
  const category = Category.create({
    name: req.body.name,
    status: req.body.status,
    })
    .then(()=>{
      res.redirect("/admin/add-category");
    });
  }
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
