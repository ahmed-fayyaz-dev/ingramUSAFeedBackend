const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const delFile = require("../utils/delFile");
const { ftpService, feedService } = require("../services");
const { ftpConfigScansource, pathsScansource } = require("../config/ftpConfig");

const updateFeedScansource = catchAsync(async (req, res) => {
  const file1 = await ftpService.downloadFile(
    ftpConfigScansource.config,
    ftpConfigScansource.fileName,
    pathsScansource.targetFolder
  );

  if (!file1) {
    throw new ApiError(httpStatus.NOT_FOUND, "File1 not found");
  }

  //   delFile(file1);

  // TODO : Call Store Procedure from feed service
  // feedService.createTable(unzipedFile1, unzipedFile2);

  req.app.locals.db
    .request()
    .execute("SpgetprocessScanSource", function (err, recordset) {
      if (err) {
        throw new ApiError(
          httpStatus.EXPECTATION_FAILED,
          "Store Procedure Failed"
        );
      }

      res.status(httpStatus.OK).json(
        returnVal({
          file1,
          result: recordset?.recordset[0]?.R_Status,
        })
      );
    });
});

const returnVal = ({ file1, result }) => {
  return {
    status: "success",
    res: {
      downloadFile: file1 ? "success" : "error",
      procedureCall: result === "Done" ? "success" : "error",
    },
  };
};

module.exports = {
  updateFeedScansource,
};
