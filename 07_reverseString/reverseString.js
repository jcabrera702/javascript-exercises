const reverseString = function(words) {
  return words.split("").reverse().join("") //without return, this would be discarded
};
console.log(reverseString("Hello World!"));

// Do not edit below this line
module.exports = reverseString;
