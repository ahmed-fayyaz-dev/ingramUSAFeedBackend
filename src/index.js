require("dotenv").config();

const app = require("./app");
const sql = require("mssql");
const config = require("./config/config");
const sqlConfig = require("./config/sqlConfig");

const appPool = new sql.ConnectionPool(sqlConfig);

let server;

//connect the pool and start the web server when done
(async () => {
  try {
    console.log("Connection sql ...");

    let pool = await appPool.connect();

    app.locals.db = pool;

    server = app.listen(config.port);

    console.log("Connected");
  } catch (err) {
    console.error("Error creating connection pool", err);
  }
})();

const errorHandler = (error) => {
  console.log("Sql Error / ", error);
  if (appPool) appPool.close();
};

const exitHandler = () => {
  if (server) {
    server.close(() => {
      console.log("Server closed");
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unExpectedErrorHandler = (err) => {
  console.log(err);
  exitHandler();
};

sql.on("error", errorHandler);

process.on("uncaughtException", unExpectedErrorHandler);
process.on("unhandledRejection", unExpectedErrorHandler);

process.on("SIGTERM", () => {
  console.log("SIGTERM Recieved");
  exitHandler();
});
