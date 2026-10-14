public class Solution {
    [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveOptimization)]
    public int Reverse(int x) {
        int result = 0;

        while (x != 0) {
            if ((uint)(result + 214748364) > 429496728u)
                return 0;

            int q = x / 10;
            result = result * 10 + (x - q * 10);
            x = q;
        }

        return result;
    }
}
