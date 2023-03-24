var cron = require("node-cron");
const { ingramFeedJobController } = require("../controller");
const catchAsync = require("../utils/catchAsync");

/*
# ┌────────────── second (optional)
# │ ┌──────────── minute
# │ │ ┌────────── hour
# │ │ │ ┌──────── day of month
# │ │ │ │ ┌────── month
# │ │ │ │ │ ┌──── day of week
# │ │ │ │ │ │
# │ │ │ │ │ │
# * * * * * *
*/
// const schedule = "1 17 * * 6";
const schedule = "30 17 * * 6";

const initIngramFeedCronJob = async (db) => {
  var task = cron.schedule(schedule, () => {
    ingramFeedJobController(db);
  });
  if (task) {
    task.stop();
  }
  task.start();
};

module.exports.initIngramFeedCronJob = initIngramFeedCronJob;
