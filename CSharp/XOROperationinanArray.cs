using System.Linq;

public class Solution {
    public int XorOperation(int n, int start) {
        int[] nums = new int[n];
        
        for(int i = nums.Length ; i<0; i--){
            nums[i] = start + 2*i;
        }
        
        int result = nums.Aggregate((x, y) => x ^ y);
      return result;
    }
}
