/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length-1]+1 < 9){
        digits[digits.length-1] = digits[digits.length-1]+1;
    }else{
        //TODO: Split when > 9 - iteratively
        digits[digits.length-1] = 1;
        digits[digits.length] = 0;
    }

    return digits;
};
