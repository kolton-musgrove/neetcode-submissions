class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const opening = ['(', '[', '{'];
        const closing = [')', ']', '}'];

        if (s.length % 2 != 0) return false

        for (var i = 0; i < s.length; i++) {
            if (opening.includes(s[i])) {
                stack.push(s[i]);
                continue;
            }

            if (closing.includes(s[i])) {
                let lastOpening = stack.pop()

                if (s[i] === ')' && lastOpening === '(') {
                    continue;
                } else if (s[i] === ']' && lastOpening === '[') {
                    continue;
                } else if (s[i] === '}' && lastOpening === '{') {
                    continue;
                } else {
                    return false
                }
            }
        }

        if (stack.length > 0) return false
        
        return true
    }
}
