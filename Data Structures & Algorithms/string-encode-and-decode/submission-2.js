class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        console.log('encoder', strs)

        var strings = ''

        for (var i = 0; i < strs.length; i++ ) {
           strings = strings + strs[i] + '\\0';
        }

        console.log('encoder', strings)

        return strings;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log('decoder', str)

        str = str.replace(/\\0/g, "\0");

        var strings = [];
        var cur_string = "";

        for (var i = 0; i < str.length; i++) {
            console.log(str[i]);

            if (str[i] === "\0") {
                strings.push(cur_string);
                cur_string = "";
            } else {
                cur_string += str[i];
            }
        }

        console.log(strings);

        return strings;
    }
}
