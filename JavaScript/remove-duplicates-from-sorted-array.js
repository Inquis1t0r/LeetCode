/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let uniqueArray = [];

    for (let i = 0; i < nums.length; i++) {
        let exists = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (nums[i] === uniqueArray[j]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            uniqueArray.push(nums[i]);
        }
    }
    return uniqueArray;
};
