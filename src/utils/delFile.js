const fs = require("fs");

// delete a file

const delFile = (path) =>
  fs.unlink(path, (err) => {
    if (err) {
      throw err;
    }

    console.log("File is deleted.");
  });

module.exports = delFile;
