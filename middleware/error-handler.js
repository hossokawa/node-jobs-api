const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  let customErr = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, try again later",
  };
  if (err.name === "ValidationError") {
    customErr.msg = Object.values(err.errors)
      .map((item) => item.message)
      .join(", ");
    customErr.statusCode = 400;
  }
  if (err.name === "CastError") {
    customErr.msg = `No job found with id ${err.value}`;
    customErr.statusCode = 404;
  }
  if (err.code && err.code === 11000) {
    customErr.msg = `That ${Object.keys(err.keyValue)} is already registered`;
    customErr.statusCode = 400;
  }
  // return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ err });
  return res.status(customErr.statusCode).json({ msg: customErr.msg });
};

module.exports = errorHandlerMiddleware;
