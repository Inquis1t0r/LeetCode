/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length-1] = digits[digits.length-1]+1;
    //console.log(digits[digits.length-1]+1);
    //TODO: Split when > 9
    return digits;
};
