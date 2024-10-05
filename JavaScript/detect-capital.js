/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const firstTwoLetters = word.slice(0, 2);
    const wholeWordToUpper = word.toUpperCase();
    
    if(!firstTwoLetters == firstTwoLetters.toUpperCase()){
        return false;
    }else{
        return word == wholeWordToUpper;
    }
};
