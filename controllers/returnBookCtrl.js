import asyncHandler from "express-async-handler";
import Book from "../models/book.js";
import { Sequelize } from "sequelize";
import Category from "../models/category.js";
import User from "../models/user.js"
import Issue from "../models/issuebook.js"
import sequelize from "../models/index.js";


// Issue.belongsTo(Category, { foreignKey: "categoryId" });
// Issue.belongsTo(User, { foreignKey: "userId" });
Issue.belongsTo(Book, { foreignKey: "bookId" });


const Op = Sequelize.Op;

export const getUsersCtrl = asyncHandler(async (req, res, next) => {
    const users = await User.findAll({
      where: {
        status: {
          [Op.eq]: "1",
        },
      },
    });
    res.render("admin/returnBook/return-book",{
        users:users
    });
  });

  export const getUserForReturnCtrl = asyncHandler(async (req, res, next) => {
    const books = await Issue.findAll({
        include:[
          {
            model:Book,
            attributes:["name"]
          }
        ],
        where: {
            userId: {
            [Op.eq]: req.body.user_id,
          },
          is_returned:{
            [Op.eq]:'0'
          }
        },
      });
  
      res.json({
          status:1,
          books:books
      });
  });
  export const updateReturnedBookByUserCtrl = asyncHandler(async (req, res, next) => {
    const IssueUpdate = await Issue.update(
        {
            is_returned:'1',
            returned_date:Sequelize.fn("NOW")
        },
       {
        where: {
            userId: {
            [Op.eq]: req.body.dd_user,
          },
          bookId:{
            [Op.eq]:req.body.dd_book
          },
          is_returned:'0'
        },
       });

      if(IssueUpdate){
        req.flash("success", "book has been returned successfully");
       
      }else{
        req.flash("error", "Failed to return book");
      }
      res.redirect("/admin/return-book/");
  });
  