// const sqlConfig = {
//   // user: process.env.SQL_USER,
//   // password: process.env.SQL_PASSWORD,
//   database: process.env.SQL_DATABASE,
//   // server: process.env.SQL_SERVER,
//   server: "DESKTOP-TD2D3V3",
//   port: process.env.SQL_PORT,
//   pool: {
//     max: 10,
//     min: 0,
//     idleTimeoutMillis: 30000,
//   },
//   options: {
//     trustedConnection: true,
//     // encrypt: true, // for azure
//     // trustServerCertificate: false, // change to true for local dev / self-signed certs
//   },
// };

// config for your database
const sqlConfig = {
  database: process.env.SQL_DATABASE,
  server: "DESKTOP-TD2D3V3",
  options: {
    trustedConnection: true,
  },
};
module.exports = sqlConfig;
