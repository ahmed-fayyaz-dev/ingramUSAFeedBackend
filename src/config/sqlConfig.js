const sqlConfig = {
  server: process.env.SQL_SERVER,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: Number(process.env.SQL_PORT),
  database: process.env.SQL_DATABASE,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 600000,
  },
  options: {
    enableArithAbort: true,
    encrypt: false,
    // trustedConnection: true,
    // encrypt: true, // for azure
  },
  connectionTimeout: 900000,
  requestTimeout: 600000,
};

// const sqlConfig = {
//   database: process.env.SQL_DATABASE,
//   server: "DESKTOP-TD2D3V3",
//   options: {
//     trustedConnection: true,
//   },
// };

module.exports = sqlConfig;
