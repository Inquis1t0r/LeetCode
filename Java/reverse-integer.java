class Solution {
    public int reverse(int x) {
        String temp = String.valueOf(x);
        return Integer.valueOf(new StringBuilder(temp).reverse().toString());
    }
}
