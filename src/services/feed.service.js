const sql = require("mssql");

const request = new sql.Request();

const table = new sql.Table("test_table"); // or temporary table, e.g. #temptable
table.create = true;
table.columns.add("a", sql.Int, { nullable: true, primary: true });
table.columns.add("b", sql.VarChar(50), { nullable: false });
table.rows.add(777, "test");

const createTable = () => {
  request.bulk(table, (err, result) => {
    // ... error checks
  });
};

const extractAndMergeTable = (file1, file2) => {};

module.exports = {
  createTable,
  extractAndMergeTable,
};
