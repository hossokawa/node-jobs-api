const CustomAPIErr = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class BadRequestErr extends CustomAPIErr {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestErr;
