const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { sftpService, extractService, feedService } = require("../services");
const delFile = require("../utils/delFile");
const { sftpConfig1, sftpConfig2, paths } = require("../config/sftpConfig");

const updateFeedIngramByJob = async (db) => {
  const file1 = await sftpService.downloadFile(
    sftpConfig1.config,
    sftpConfig1.fileName,
    paths.zipFileFolderPath
  );

  const file2 = await sftpService.downloadFile(
    sftpConfig2.config,
    sftpConfig2.fileName,
    paths.zipFileFolderPath
  );

  if (!file1) {
    throw new ApiError(httpStatus.NOT_FOUND, "File1 not found");
  }

  if (!file2) {
    throw new ApiError(httpStatus.NOT_FOUND, "File2 not found");
  }

  const unzipedFile1 = await extractService.unzip(
    file1,
    paths.unzipFileFolderPath
  );

  const unzipedFile2 = await extractService.unzip(
    file2,
    paths.unzipFileFolderPath
  );

  if (!unzipedFile1) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, "File1 not unzipped");
  }

  if (!unzipedFile2) {
    throw new ApiError(httpStatus.EXPECTATION_FAILED, "File2 not unzipped");
  }

  console.log("Extracted");

  delFile(file1);
  delFile(file2);

  db.request().execute("SpgetprocessIngram", function (err, recordset) {
    if (err) {
      console.warn(err);

      throw new ApiError(
        httpStatus.EXPECTATION_FAILED,
        "Store Procedure Failed"
      );
    }

    console.log(recordset?.recordset[0]?.R_Status);

    // res.status(httpStatus.OK).json(
    //   returnVal({
    //     file1,
    //     file2,
    //     unzipedFile1,
    //     unzipedFile2,
    //     result: recordset?.recordset[0]?.R_Status,
    //   })
    // );

    /* Update Record of file */
  });
};

module.exports = updateFeedIngramByJob;
