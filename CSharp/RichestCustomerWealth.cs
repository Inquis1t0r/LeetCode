public class Solution {
    public int MaximumWealth(int[][] accounts) {
        int result = 0; 
        for (int n = 0; n < accounts.Length; n++) { 
            System.Console.Write("Row({0}): ", n); 
            
            for (int k = 0; k < accounts[n].Length; k++) { 
                System.Console.Write("{0} ", accounts[n][k]); 
            } 
            System.Console.WriteLine();      
        } 
        return result;
    }
}
