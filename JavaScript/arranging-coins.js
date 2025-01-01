/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    if(n == 1) {return n};
    let row = 0;
    while(n > 0){
        row++;
        n = n -1 * row;
    }
    return n < 0 ? row-1 : row;
};
