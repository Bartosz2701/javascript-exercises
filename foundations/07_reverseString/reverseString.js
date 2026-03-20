const reverseString = function(str) {
    let rev = [];

    for (let i = str.length - 1; i >= 0; i--) {
        rev.push(str[i]);
        
    }
    return rev.join("")
};

// Do not edit below this line
module.exports = reverseString;
