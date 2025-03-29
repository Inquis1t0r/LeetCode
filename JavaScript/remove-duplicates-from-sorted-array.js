/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let length = nums.length;

    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] === nums[j]) {
                for (let k = j; k < length - 1; k++) {
                    nums[k] = nums[k + 1];
                }
                length--;  
                j--; 
            }
        }
    }

    nums.length = length; 
};
