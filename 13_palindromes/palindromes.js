const palindromes = function (string) {
const sanitizedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
const reversedString = sanitizedString.split("").reverse().join("");
return sanitizedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
