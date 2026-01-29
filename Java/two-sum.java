import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {

        if (nums == null || nums.length < 2) {
            return new int[] {};
        }

        Map < Integer, Integer > seen = new HashMap < > (nums.length, 1.0 f);

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];

            if (seen.containsKey(complement)) {
                return new int[] {
                    seen.get(complement), i
                };
            }

            seen.put(nums[i], i);
        }

        return new int[] {};
    }
}
