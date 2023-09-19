class Solution {
    
int[] decimalValue = {1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1};
String[] roman = {"M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"};
int result = 0;     
    
    public int romanToInt(String s) 
    {
  
        for (int i = 0; i < decimalValue.length; i++ ) 
        {
            while (s.indexOf(roman[i]) == 0) 
            {
                result += decimalValue[i];
                s = s.substring(roman[i].length());
            }
        }
        return result;
    }
    
    
    
}
