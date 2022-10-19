"use strict";

const Client = require("ssh2-sftp-client");

/*
 *download sftp file
 */
const downloadFile = async (sftpConfig, fileName, targetPath) => {
  const sftp = new Client("sftp-client");
  const targetPathFull = targetPath + "/" + fileName;

  if (sftp) {
    console.log("downloading...");

    return await sftp
      .connect(sftpConfig)
      .then(async () => {
        try {
          await sftp.fastGet(fileName, targetPathFull);
          console.log("downloaded");
          sftp.end();

          return targetPathFull;
        } catch (err) {
          throw err;
        }
      })
      .catch((err) => {
        throw err;
      });
  }
};

module.exports = { downloadFile };
