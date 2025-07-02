/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const count = {};
    nums.forEach(num => {
        count[num] = (count[num] || 0) + 1;
    });

    const minCount = Math.min(...Object.values(count));
    const firstMin = nums.find(item => count[item] === minCount);
    console.log(firstMin);
    return firstMin;
};
