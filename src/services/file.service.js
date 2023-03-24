const fs = require("fs/promises");

async function getFileStat(fileName, filePath) {
  const pathFull = filePath + "/" + fileName;

  try {
    const stats = await fs.stat(pathFull);

    const { blksize, size, atime, mtime, ctime, birthtime } = stats;

    return {
      blksize,
      size,
      atime,
      mtime,
      ctime,
      birthtime,
    };
  } catch (err) {
    throw err;
  }
}

module.exports = { getFileStat };
