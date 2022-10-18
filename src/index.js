require("dotenv").config();

const app = require("./app");
const sql = require("mssql");
const config = require("./config/config");
const sqlConfig = require("./config/sqlConfig");

let server;

// (async () => {
//   try {
//     console.log("Connection sql ...");
//     server = await sql.connect(sqlConfig);

//     console.log("Connected");
//   } catch (e) {
//     console.log(e);
//   }
// })();

const errorHandler = (error) => {
  console.log("Sql Error / ", error);
  exitHandler();
};

const exitHandler = () => {
  if (server) {
    server.close;
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

app.listen(config.port);
