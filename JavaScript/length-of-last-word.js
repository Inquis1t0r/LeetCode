/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    const filteredArr = arr.filter(str => str.trim() !== "");
    return filteredArr[filteredArr.length-1].length;
};
