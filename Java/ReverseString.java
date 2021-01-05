class Solution {
    public void reverseString(char[] s) {
        
        final StringBuilder builder = new StringBuilder(s);
        int length = builder.length();
        for (int i = 0; i < length / 2; i++) {
            final char current = builder.charAt(i);
            final int otherEnd = length - i - 1;
            builder.setCharAt(i, builder.charAt(otherEnd));
            builder.setCharAt(otherEnd, current);
        }

        return builder.toString();
    }
}
