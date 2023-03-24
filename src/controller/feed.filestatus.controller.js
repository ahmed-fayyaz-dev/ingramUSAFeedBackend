const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { getFileStat } = require("../services/file.service");
const { paths } = require("../config/sftpConfig");

const getFeedFileStatus = catchAsync(async (req, res) => {
  console.log("GET FILE STATUS API CALLED");

  const fileStat1 = await getFileStat("PRICE.TXT", paths.unzipFileFolderPath);

  const fileStat2 = await getFileStat("TOTAL.TXT", paths.unzipFileFolderPath);

  if (!fileStat1) {
    throw new ApiError(httpStatus.NOT_FOUND, "File1 not found");
  }

  if (!fileStat2) {
    throw new ApiError(httpStatus.NOT_FOUND, "File2 not found");
  }

  res.status(httpStatus.OK).json(
    returnVal({
      fileStat1,
      fileStat2,
    })
  );
});

const returnVal = ({ fileStat1, fileStat2 }) => {
  return {
    status: "success",
    res: {
      fileStat1,
      fileStat2,
    },
  };
};

module.exports = {
  getFeedFileStatus,
};

// throw new ApiError(httpStatus.EXPECTATION_FAILED, "File2 not unzipped");
