import asyncHandler from "express-async-handler";
import Category from "../models/category.js";
import Sequelize from "sequelize";
const Op = Sequelize.Op;

export const getCategoryCtrl = asyncHandler(async (req, res, next) => {
  res.render("admin/category/add-category");
});

export const postgetCategoryCtrl = (req, res, next) => {
  Category.findOne({
    where: {
      name: {
        [Op.eq]: req.body.name,
      },
    },
  }).then((data) => {
    if (data) {
      req.flash("error", "Category with this name is exist");
      res.redirect("/admin/add-category");
    } else {
      Category.create({
        name: req.body.name,
        status: req.body.status,
      }).then((category) => {
        if (category) {
          req.flash("success", "category added succesfuly");
          res.redirect("/admin/add-category");
        } else {
          req.flash("error", "somthing went wrong");
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

export const getListCategoryCtrl = asyncHandler(async (req, res, next) => {
  const all_categories = await Category.findAll();

  res.render("admin/category/list-category", {
    categories: all_categories,
  });
});
export const getEditCategoryCtrl = asyncHandler(async (req, res, next) => {
  await Category.findOne({
    where: {
      id: {
        [Op.eq]: req.params.cat_id,
      },
    },
  }).then((data) => {
    res.render("admin/category/edit-category", {
      category: data,
    });
  });
});
export const EditCategoryCtrl = asyncHandler(async (req, res, next) => {
  await Category.findOne({
    where: {
      [Op.and]: [
        {
          id: {
            [Op.ne]: req.params.cat_id,
          },
          name: {
            [Op.eq]: req.body.name,
          },
        },
      ],
    },
  }).then((data) => {
    if (data) {
      //console.log(data);
      req.flash("error", "Category is exist");
      res.redirect("/admin/edit-category/" + req.params.cat_id);
    } else {
      Category.update(
        {
          name: req.body.name,
          status: req.body.status,
        },
        {
          where: {
            id: req.params.cat_id,
          },
        }
      ).then((data) => {
        if (data) {
          req.flash("success", "Category updated");
        } else {
          req.flash("error", "somthing went wrong with update");
        }
        res.redirect("/admin/edit-category/" + req.params.cat_id);
      });
    }
  });
});
export const deleteCategory = asyncHandler(async (req, res, next) => {
  await Category.findOne({
    where: {
      id: {
        [Op.eq]: req.body.category_id,
      },
    },
  }).then((data) => {
    if (data) {
      Category.destroy({
        where: {
          id: {
            [Op.eq]: req.body.category_id,
          },
        },
      }).then((status) => {
        if (status) {
          req.flash("success", "Category deleted");
        } else {
          req.flash("error", "somthing went wromg");
        }
        res.redirect("/admin/list-category");
      });
    }
  });
});
