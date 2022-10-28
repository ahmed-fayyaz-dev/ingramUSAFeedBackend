const executeSpgetprocessIngram = async (db) => {
  return await db
    .request()
    .execute("SpgetprocessIngram", async function (err, recordset) {
      if (err) {
        throw err;
      }

      console.dir(recordset);
      return recordset;
    });
};

const createTable = () => {
  request.bulk((err, result) => {
    // ... error checks
  });
};

module.exports = {
  createTable,
  executeSpgetprocessIngram,
};
