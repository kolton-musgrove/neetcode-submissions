class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        var s_arr = s.split("")
        var t_arr = t.split("")

        s_arr.sort()
        t_arr.sort()

        for (var i = 0; i <= s_arr.length; i++) {
            if (s_arr[i] != t_arr[i]) return false
        } 

        return true
    }
}
