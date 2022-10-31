const reverseString = function (string) {
    let reverseString = Array.from(string)
    reverseString.reverse()
    return reverseString.join(``)
};

// Do not edit below this line
module.exports = reverseString;
