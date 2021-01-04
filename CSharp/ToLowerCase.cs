public class Solution {
    public string ToLowerCase(string str) {
        String output = "";  
        
         for (int i = 0; i < str.Length; i++)  
         {  
            if (str[i] >= 'A' && str[i] <= 'Z')  
            {  
               output += (char)(str[i] - 'A' + 'a');  
            }  
            else  
               output += str[i];  
         }  
         return output; 
    }
}
