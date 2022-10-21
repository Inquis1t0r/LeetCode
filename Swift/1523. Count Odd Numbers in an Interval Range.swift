class Solution {
    func countOdds(_ low: Int, _ high: Int) -> Int {
        return (high - low + 1 + low % 2) / 2
    }
}
