
public class Solution {
    public int[] PlusOne(int[] digits) {
        digits[digits.Length - 1] += 1;
        return digits;
    }
}
