import asyncHandler from "express-async-handler";
import Book from "../models/book.js";
import { Sequelize } from "sequelize";
import Category from "../models/category.js";
const Op = Sequelize.Op;
Book.belongsTo(Category, {foreignKey: 'categoryId' });
export const getBookCtrl = asyncHandler(async (req, res, next) => {
  const categories = Category.findAll({
    where: {
      status: {
        [Op.eq]: "1",
      },
    },
  }).then((data) => {
    res.render("admin/book/add-book", {
      categories: data,
    });
  });
});
export const sendPostBookCtrl = asyncHandler(async (req, res, next) => {
  //console.log(req.files);
  if (!req.files) {
    req.flash("error", "please upload file");
    res.redirect("/admin/add-book");
  } else {
    var image_attr = req.files.cover_image;
    var validate_image_ = ["image/png", "image/jpg", "image/jpeg"];
    if (validate_image_.includes(image_attr.mimetype)) {
      const Book_exist = await Book.findOne({
        where: {
          [Op.or]: [
            {
              name: {
                [Op.eq]: req.body.book_name,
              },
              author: {
                [Op.eq]: req.body.author,
              },
            },
          ],
        },
      });
      if (!Book_exist) {
        image_attr.mv("./public/uploads/" + image_attr.name);
        await Book.create({
          name: req.body.book_name,
          categoryId: req.body.dd_category,
          description: req.body.book_desc,
          amount: req.body.amount,
          cover_image: "/uploads/" + image_attr.name,
          author: req.body.author,
          status: req.body.book_status,
        }).then((status) => {
          if (status) {
            req.flash("success", "book has been created");
          } else {
            req.flash("error", "book not created");
          }
          res.redirect("/admin/add-book");
        });
      } else {
        req.flash("error", "Book exist");
        res.redirect("/admin/add-book");
      }
    } else {
      req.flash("error", "please choose type only: png-jpg-jpeg");
      res.redirect("/admin/add-book");
    }
  }
});
export const getListBookCtrl = asyncHandler(async (req, res, next) => {
  
  const Books = await Book.findAll({
    include: {
      model: Category,
      // attributes:["name"]
    },
  });
  // res.json(Books);
  res.render("admin/book/list-book",{
    books:Books
  });
});
