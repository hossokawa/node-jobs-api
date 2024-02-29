const CustomAPIErr = require("./custom-error");
const { StatusCodes } = require("http-status-codes");

class NotFoundErr extends CustomAPIErr {
  constructor(msg) {
    super(msg);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundErr;
