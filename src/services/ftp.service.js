"use strict";

const ftp = require("basic-ftp");

/*
 *download ftp file
 */

const downloadFile = async (ftpConfig, fileName, targetPath) => {
  const client = new ftp.Client();

  const targetPathFull = targetPath + "/" + fileName;

  try {
    console.log("downloading...");

    await client.access(ftpConfig);

    await client.downloadTo(targetPathFull, fileName);

    console.log("downloaded");

    client.close();
    return targetPathFull;
  } catch (err) {
    throw err;
  }
};

module.exports = { downloadFile };
