const removeFromArray = function(myArr, ...args) {
  for(let i=0; i<args.length; i++) {
    if(myArr.includes(args[i])){
      myArr.splice(myArr.indexOf(args[i]),1)
    }
  }
  return myArr;
};

// Do not edit below this line
module.exports = removeFromArray;
