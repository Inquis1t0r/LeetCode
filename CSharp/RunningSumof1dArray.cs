public class Solution {
    public int[] RunningSum(int[] nums) {
        int sum;  
        return nums.Select(w=>sum+=w);
    }
}
