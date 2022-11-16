const repeatString = function(mystr, num) {
  let i = 0
  let res = mystr
  while(i < num-1) {
    res += mystr;
    i++;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
