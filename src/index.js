require("dotenv").config();

const app = require("./app");
const sql = require("mssql");
// const sql = require("mssql/msnodesqlv8");
const config = require("./config/config");
const sqlConfig = require("./config/sqlConfig");

let server;

const connectDB = async () => {
  try {
    console.log("Connection sql ...");
    // server = await sql.connect(sqlConfig);
    server = await sql.connect(
      "Server=localhost,1433;Database=TestDB;User Id=sa;Password=sa123;Encrypt=true"
    );

    const result = await sql.query`select * from mytable`;
    console.dir(result);
  } catch (e) {
    console.log(e);
  }
};

const errorHandler = (error) => {
  console.log("Sql Error / ", error);
};

const exitHandler = () => {
  if (server) {
    server.close;
  }
};

sql.on("error", errorHandler);

app.listen(config.port);
