const path = require("path");
const sftpConfig1 = {
  config: {
    host: process.env.SFTP_HOST_1,
    username: process.env.SFTP_USERNAME_1,
    password: process.env.SFTP_PASSWORD_1,
  },
  fileName: process.env.SFTP_FILENAME_1,
};

const sftpConfig2 = {
  config: {
    host: process.env.SFTP_HOST_2,
    username: process.env.SFTP_USERNAME_2,
    password: process.env.SFTP_PASSWORD_2,
  },
  fileName: process.env.SFTP_FILENAME_2,
};

const paths = {
  unzipFileFolderPath: path.join(__dirname + "../../../temp/unziped-files"),
  zipFileFolderPath: path.join(__dirname + "../../../temp"),
};

module.exports = { sftpConfig1, sftpConfig2, paths };
