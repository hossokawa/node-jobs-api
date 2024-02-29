const CustomAPIErr = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class UnauthorizedErr extends CustomAPIErr {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthorizedErr;
