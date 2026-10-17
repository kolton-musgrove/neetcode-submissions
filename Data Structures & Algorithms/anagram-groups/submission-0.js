class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var groups = []

        const isSameSignature = (sig1, sig2) => {
            // get all keys from both signatures
            const keys1 = Object.keys(sig1);
            const keys2 = Object.keys(sig2);

            if (keys1.length !== keys2.length) return false

            for (let key of keys1) {
                if (sig1[key] !== sig2[key]) {
                    return false;
                }
            }

            return true
        }

        const generateSignature = (string) => {
            const signature = {}

            for (var i = 0; i < string.length; i++) {
                const char = string[i]

                if (signature[char]) {
                    signature[char]++
                } else {
                    signature[char] = 1
                }
            }

            return signature
        }

        for (var i = 0; i < strs.length; i++) {
            const signature = generateSignature(strs[i])

            if (groups.length == 0) {
                groups.push([strs[i]])
                continue
            }

            let foundGroup = false

            for (var j = 0; j < groups.length; j++) {
                const groupSignature = generateSignature(groups[j][0])
                const isAnagram = isSameSignature(signature, groupSignature)

                if (isAnagram) {
                    groups[j].push(strs[i])
                    foundGroup = true
                    break;
                } 
            }

            if (!foundGroup) {
                groups.push([strs[i]])
            }
        }

        return groups
    } 
}
