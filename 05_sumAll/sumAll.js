const sumAll = function (num1, num2) {
    let finalSum = num1 + num2;
    if (num1 < 0 || num2 < 0 || typeof num1 !== `number` || typeof num2 !== `number`) {
        return `ERROR`
    }
    while (num2 > num1 + 1 || num1 > num2 + 1) {
        if (num2 > num1 + 1) {
            num2--
            finalSum += num2
        }
        else if (num1 > num2 + 1) {
            num1--
            finalSum += num1
        }
    }
    return finalSum
};

// Do not edit below this line
module.exports = sumAll;
