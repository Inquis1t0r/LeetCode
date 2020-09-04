public class Solution {
    public int FindNumbers(int[] nums) {
        int counter = 0;
          for (int i = 0; i < nums.Length; i += 1)
          {
              if(nums[i].ToString().Length % 2 == 0)
                  counter +=1;
          }
        return counter;
    }
}
