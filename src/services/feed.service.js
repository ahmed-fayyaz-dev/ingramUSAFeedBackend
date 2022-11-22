const executeSpgetprocessIngram = async (db) => {
  return db
    .request()
    .execute("SpgetprocessIngram", async function (err, recordset) {
      if (err) {
        throw err;
      }

      return recordset;
    });
};

module.exports = {
  executeSpgetprocessIngram,
};
