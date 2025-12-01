const fibonacci = function(num) {
    let newArray = [1, 1];
  for(let i=2; i<=num; i++ ){
   const nextFib = newArray[newArray.length-2] + newArray[newArray.length-1];
    newArray.push(nextFib);
  }
  return newArray[num-1];
};
console.log(fibonacci(2));

// Do not edit below this line
module.exports = fibonacci;
