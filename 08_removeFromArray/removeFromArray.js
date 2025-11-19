const removeFromArray = function(array) {
    if(typeof array === "object") {
        return array;
    }
};
console.log(removeFromArray([1, 2, 3, 4], 3));

//removeFromArray([1, 2, 3, 4], 3);
// Do not edit below this line
module.exports = removeFromArray;


