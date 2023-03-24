"use strict";

const express = require("express");
const logger = require("../../middleware/logger");
const {
  ingramFeedController,
  scansourceFeedController,
  feedFileStatusController,
} = require("../../controller");

const router = express.Router();

router.use(logger);

router.route("/ingram/update").get(ingramFeedController.updateFeedIngram);

router
  .route("/scansource/update")
  .get(scansourceFeedController.updateFeedScansource);

router.route("/filestatus").get(feedFileStatusController.getFeedFileStatus);

module.exports = router;
