class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var string = ''

        for (var i = 0; i < strs.length; i++ ) {
           string += strs[i].length + '#' + strs[i];
        }

        return string;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var strings = [];
        var i = 0;

        while (i < str.length) {
            var j = i;

            while (str[j] !== '#') {
                j++
            }

            var length = Number.parseInt(str.slice(i, j));
            var string = str.slice(j + 1, j + 1 + length);

            strings.push(string);

            i = j + 1 + length;
        }

        return strings;
    }
}
