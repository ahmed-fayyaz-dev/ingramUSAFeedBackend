"use strict";

const express = require("express");
const httpStatus = require("http-status");
const path = require("path");
const routes = require("./routes/v1");
const { errorConverter, errorHandler } = require("./middleware/error");
const ApiError = require("./utils/ApiError");

const app = express();

// parse json req body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// View enginge
app.set("view engine", "ejs");

// views path
app.set("views", path.join(__dirname, "/views"));

// v1 Api
app.use("/v1", routes);
// app.use("/node/express/v1", routes);

// send back a 404 error for unkown api req
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
