public class Solution {
    public string LongestPalindrome(string s) {
        int start = 0, maxLen = 1;

        for (int i = 0; i < s.Length; i++) {
            int odd = Expand(s, i, i);
            int even = Expand(s, i, i + 1);
            int len = Math.Max(odd, even);

            if (len > maxLen) {
                maxLen = len;
                start = i - (len - 1) / 2;
            }
        }

        return s.Substring(start, maxLen);
    }

    private int Expand(string s, int left, int right) {
        while (left >= 0 && right < s.Length && s[left] == s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}
