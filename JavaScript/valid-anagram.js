/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return Array.from(s).sort() === Array.from(t).sort();
};
