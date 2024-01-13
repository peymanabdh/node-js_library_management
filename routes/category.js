import express from "express";
const categoryRouter = express.Router();
import {
  createCategoryCtrl,
  getCategoryCtrl,
  postgetCategoryCtrl,
} from "../controllers/categoryCtrl.js";

/* GET home page. */
categoryRouter
  .get("/admin/add-category", getCategoryCtrl)
  .post("/admin/add-category", postgetCategoryCtrl);
// categoryRouter.post("/admin/add-category", createCategoryCtrl);

export default categoryRouter;
