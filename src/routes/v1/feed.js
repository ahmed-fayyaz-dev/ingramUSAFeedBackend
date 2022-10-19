"use strict";

const express = require("express");
const logger = require("../../middleware/logger");
const {
  ingramFeedController,
  scansourceFeedController,
} = require("../../controller");

const router = express.Router();

router.use(logger);

router.route("/ingram/update").get(ingramFeedController.updateFeedIngram);

router
  .route("/scansource/update")
  .get(scansourceFeedController.updateFeedScansource);

module.exports = router;
