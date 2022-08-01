class Solution {
    func isPalindrome(_ x: Int) -> Bool {
        var initialNumber = x
        var reverseNumber = 0
        while initialNumber > 0 {
            reverseNumber = reverseNumber * 10 + initialNumber % 10
            initialNumber = initialNumber / 10
        }
        return x == reverseNumber  
    }
}
