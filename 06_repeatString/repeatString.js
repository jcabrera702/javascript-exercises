const repeatString = function(string, numberRepeats) {
  let newArray = [];
 for (let i=0; i<numberRepeats; i++){ //Loop pushes the next command this many times
    newArray.push(string);
 }
 return newArray.join(""); //took away the space
};
console.log(repeatString("Hey", 3))

// Do not edit below this line
module.exports = repeatString;
