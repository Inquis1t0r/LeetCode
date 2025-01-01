/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let row = 0;
    while(n > 0){
        row++
        n = n -1 * row;
    }
    return row-1;
};
