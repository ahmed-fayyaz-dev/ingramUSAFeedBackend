const sqlConfig = {
  server: process.env.SQL_SERVER,
  user: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  port: Number(process.env.SQL_PORT),
  database: process.env.SQL_DATABASE,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    enableArithAbort: true,
    encrypt: false,
    // trustedConnection: true,
    // encrypt: true, // for azure
  },
  connectionTimeout: 150000,
};

// const sqlConfig = {
//   database: process.env.SQL_DATABASE,
//   server: "DESKTOP-TD2D3V3",
//   options: {
//     trustedConnection: true,
//   },
// };

module.exports = sqlConfig;
