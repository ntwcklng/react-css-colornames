var returnNum = require('./ReturnNum');

function convertRGBtoHex(RGB) {
  RGB = RGB.split(',');
  var r = returnNum(RGB[0]);
  var g = returnNum(RGB[1]);
  var b = returnNum(RGB[2]);

  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

module.exports = convertRGBtoHex;