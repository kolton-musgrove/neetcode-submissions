class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let n = nums.length;
        const ret = new Array(2 * n);

        for (var i = 0; i < n; i++) {
            ret[i] = nums[i];
            ret[i + n] = nums[i];
        }

        return ret
    }
}
