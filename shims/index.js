const crypto = require("crypto");

function bufferEq(a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) return false;
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

bufferEq.install = function () {};
bufferEq.restore = function () {};

module.exports = bufferEq;