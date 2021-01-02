public class Solution {
    public int MaximumWealth(int[][] accounts) {
        int result = 0; 
        int tempResult = 0;
        for (int n = 0; n < accounts.Length; n++) {      
            for (int k = 0; k < accounts[n].Length; k++) {  
                tempResult += accounts[n][k];
                if(result < tempResult){
                     result = tempResult;
                }   
            }   
            tempResult = 0;
        } 
        return result;
    }
}
