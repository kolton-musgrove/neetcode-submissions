class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false

        let s_counts = {}
        let t_counts = {} 

        for (var i = 0; i <= s.length; i++){
            s_counts[s[i]] = (s_counts[s[i]] || 0) + 1;
            t_counts[t[i]] = (t_counts[t[i]] || 0) + 1;
        }

        for (const key in s_counts) {
            if (s_counts[key] !== t_counts[key]) {
                return false
            }
        }

        return true
    }
}
