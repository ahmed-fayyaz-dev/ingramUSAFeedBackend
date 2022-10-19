const path = require("path");

// FTP_HOST_SCAN_SOURCE="catalog.scansource.com"
// FTP_USERNAME_SCAN_SOURCE="scsc_catalog"
// FTP_PASSWORD_SCAN_SOURCE="b2bsolutions"
// FTP_FILENAME_SCAN_SOURCE="enhanced.txt"

const ftpConfigScansource = {
  config: {
    // host: process.env.FTP_HOST_SCAN_SOURCE,
    // username: process.env.FTP_USERNAME_SCAN_SOURCE,
    // password: process.env.FTP_PASSWORD_SCAN_SOURCE,
    // secure: true,

    host: "catalog.scansource.com",
    user: "scsc_catalog",
    password: "b2bsolutions",
    secure: false,
  },
  // fileName: process.env.FTP_FILENAME_SCAN_SOURCE,
  fileName: "enhanced.txt",
};

const pathsScansource = {
  targetFolder: path.join(__dirname + "../../../temp/scansource"),
};

module.exports = { ftpConfigScansource, pathsScansource };
