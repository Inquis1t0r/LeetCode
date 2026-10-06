public class Solution {
    public int LengthOfLongestSubstring(string s) {
        int[] lastSeen = new int[128];
        Array.Fill(lastSeen, -1);

        int maxLen = 0;
        int left = 0;

        for (int right = 0; right < s.Length; right++) {
            char c = s[right];

            if (lastSeen[c] >= left) {
                left = lastSeen[c] + 1;
            }

            lastSeen[c] = right;
            maxLen = Math.Max(maxLen, right - left + 1);
        }

        return maxLen;
    }
}
