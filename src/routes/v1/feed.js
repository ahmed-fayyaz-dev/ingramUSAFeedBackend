"use strict";

const express = require("express");
const logger = require("../../middleware/logger");
const { feedController } = require("../../controller");

const router = express.Router();

router.use(logger);

// router.route("/").get();

router.route("/update").get(feedController.updateFeed);

router.param("listenToThisVar", (req, res, next, value) => {
  next();
});

module.exports = router;
