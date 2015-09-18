function returnNum(str) {
  var num = parseInt(str.replace(/[^0-9]/g, ''));
  return num;
}

module.exports = returnNum;