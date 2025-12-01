const findTheOldest = function(array) {
const oldestPerson = array.reduce((a,b) =>{
    if (a.yearOfBirth < b.yearOfBirth){
        return a;
    } else {
        return b;
    }
})
return oldestPerson.name;
};
console.log(findTheOldest(people));

const greatestAge = function(array){
    const longestLived = array.reduce((a,b) => {
        if ((a.yearOfDeath - a.yearOfBirth)>(b.yearOfDeath-b.yearOfBirth)) {
            return a;
        } else {
            return b;
        }
    });
    return longestLived.name;
}
console.log(greatestAge(people));

// Do not edit below this line
module.exports = findTheOldest;
