// var createError = require("http-errors");
import createError from "http-errors";
// var express = require("express");
import express from "express";
// var path = require("path");
import fileupload from "express-fileupload";
import path, { dirname } from "path";
// var cookieParser = require("cookie-parser");
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import flash from "express-flash";
import session from "express-session";
import sequelize from "./models/index.js";
// var logger = require("morgan");
import logger from "morgan";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/users.js";
import adminRouter from "./routes/admin.js";
import categoryRouter from "./routes/category.js";
import bookRouter from "./routes/book.js";
import issueBookRouter from "./routes/issueBook.js";
import returnBookRouter from "./routes/returnBook.js";
import currencyRouter from "./routes/currency.js";
import daysSettingRouter from "./routes/days.js";
// import db from "./models/index.js";
const app = express();

// view engine setup
// app.set("views", path.join(__dirname, "views"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(express.cookieParser("keyboard cat"));
app.use(
  session({
    name: "my_session",
    secret: "my_secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.use(
  fileupload({
    createParentPath: true,
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", express.static(path.join(__dirname, "public")));
app.use("/admin/:any", express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/", usersRouter);
app.use("/", adminRouter);
app.use("/", categoryRouter);
app.use("/", bookRouter);
app.use("/", issueBookRouter);
app.use("/", returnBookRouter);
app.use("/", currencyRouter);
app.use("/", daysSettingRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

export default app;
