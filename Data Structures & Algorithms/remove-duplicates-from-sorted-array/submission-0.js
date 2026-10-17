class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
            var k = 1;

    for (var i = 1; i < nums.length; i++) {
        // if item is not already in array
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]
            k++
        }
    }

    return k
    }
}
