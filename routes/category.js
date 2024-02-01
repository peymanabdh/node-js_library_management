import express from "express";
const categoryRouter = express.Router();
import {
  createCategoryCtrl,
  getCategoryCtrl,
  postgetCategoryCtrl,
  getListCategoryCtrl,
  getEditCategoryCtrl,
  EditCategoryCtrl,
  deleteCategory,
} from "../controllers/categoryCtrl.js";
import { redirectLogin } from "../middleware/autintacation_session.js";

/* GET home page. */
categoryRouter
  .get("/admin/add-category",redirectLogin, getCategoryCtrl)
  .post("/admin/add-category", postgetCategoryCtrl);

categoryRouter.get("/admin/list-category", getListCategoryCtrl);

categoryRouter.get("/admin/edit-category/:cat_id", getEditCategoryCtrl);
categoryRouter.post("/admin/edit-category/:cat_id", EditCategoryCtrl);
categoryRouter.post("/admin/delete-category", deleteCategory);
export default categoryRouter;
