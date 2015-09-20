function ReturnTextColor(groups) {
  var res;
  if(groups.indexOf('dark') >= 0) {
     res = '#f2f2f2';
   } else {
    res = '#1b1b1b';
   }
   return res;
}

module.exports = ReturnTextColor;