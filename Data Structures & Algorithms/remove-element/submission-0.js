class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        var insert = 0

        // iterate over the nums array replaceing the values at nums[insert]
        // with the values at nums[non_val] when non_val is not equal to val
        for (var non_val = 0; non_val < nums.length; non_val++) {
            if (nums[non_val] != val) {
                nums[insert] = nums[non_val]
                insert++
            }
        }

        return insert
    }
}
