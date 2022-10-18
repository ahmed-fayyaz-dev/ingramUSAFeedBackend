const express = require("express");
// const userRoute = require("./users");
const rootRoute = require("./root");
const feedRoute = require("./feed");
const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: rootRoute,
  },
  {
    path: "/feed",
    route: feedRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
