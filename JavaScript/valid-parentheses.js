/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const matching = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    
    for (let char of s) {
        if (char in matching) {
            const top = stack.length > 0 ? stack.pop() : '#';
            if (top !== matching[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
};
