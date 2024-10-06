/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    const firstTwoLetters = word.slice(0, 2);
    const wholeWordToUpper = word.toUpperCase();
    
    if(!firstTwoLetters == firstTwoLetters.toUpperCase()){
        return false;
    }else if(word[0] + word.slice(1).toLowerCase() == word){ //That single test case with single lowercase char
        return true;
    }else{
         return word == wholeWordToUpper;   
    }

};
