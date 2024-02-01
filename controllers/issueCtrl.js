import asyncHandler from "express-async-handler";
import Book from "../models/book.js";
import { Sequelize } from "sequelize";
import Category from "../models/category.js";
import User from "../models/user.js"
import Issue from "../models/issuebook.js"


Issue.belongsTo(Category, { foreignKey: "categoryId" });
Issue.belongsTo(User, { foreignKey: "userId" });
Issue.belongsTo(Book, { foreignKey: "bookId" });


const Op = Sequelize.Op;

export const getIssueCtrl = asyncHandler(async (req, res, next) => {
    const categories = await Category.findAll({
      where: {
        status: {
          [Op.eq]: "1",
        },
      },
    });
    const users = await User.findAll({
        where: {
          status: {
            [Op.eq]: "1",
          },
        },
      });

    res.render("admin/issue/issue-book",{
        categories:categories,
        users:users
    });  
  });

export const getCategoryForIssueCtrl = asyncHandler(async (req, res, next) => {
    const books = await Book.findAll({
      where: {
        categoryId: {
          [Op.eq]: req.body.cat_id,
        },
      },
    });

    res.json({
        status:1,
        books:books
    })
  });

export const createIssueCtrl = asyncHandler(async (req, res, next) => {
    
    const if_is_book_issued= await Issue.count({
        where:{
          userId:{
              [Op.eq]:req.body.dd_user
          },
          bookId:{
            [Op.eq]:req.body.dd_book
         },
          is_returned:{
              [Op.eq]:'0'
          }
        }
    });
    if(if_is_book_issued >0){
        req.flash("error", "book is isuue for this user befor");
        res.redirect("/admin/issue-book");
        return;
    }
    const count_books= await Issue.count({
          where:{
            userId:{
                [Op.eq]:req.body.dd_user
            },
            is_returned:{
                [Op.eq]:'0'
            }
          }
    });
    if(count_books >= 2){
        req.flash("error", "maximium books allowed to for each user is equals 2 number");
        res.redirect("/admin/issue-book");
    }else{
        const issue = await Issue.create({
            categoryId :req.body.dd_category,
            bookId:req.body.dd_book,
            userId:req.body.dd_user,
            days_issued:req.body.dd_days
        });
    
        if(issue){
            req.flash("success", "has been issued");
        }else{
            req.flash("error", "Faled to issue");
        }
        res.redirect("/admin/issue-book");
    }
   
  });

export const getListIssueCtrl = asyncHandler(async (req, res, next) => {


  const issueList=await Issue.findAll({
      include:[
        {
          model:Category,
          attributes:["name"]
        },
        {
          model:Book,
          attributes:["name"]
        },
        {
          model:User,
          attributes:["name","email"]
        }
      ],
      attributes:["days_issued","issued_date"],
      where:{
        is_returned:{
          [Op.eq]:"0"
        }
      }
  });
  // res.json(issueList);
  res.render("admin/issue/list-issue",{
    issueList:issueList
  });

  });