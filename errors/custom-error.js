class CustomAPIErr extends Error {
  constructor(msg) {
    super(msg);
  }
}

module.exports = CustomAPIErr;
