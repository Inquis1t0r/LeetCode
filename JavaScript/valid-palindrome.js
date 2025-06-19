// 125. Valid Palindrome
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let concatenatedInput = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    let reversedConcatenatedInput = concatenatedInput.split('').reverse().join('');

    return concatenatedInput === reversedConcatenatedInput;
};
