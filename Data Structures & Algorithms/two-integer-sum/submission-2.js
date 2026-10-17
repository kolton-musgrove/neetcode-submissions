class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // create a map of value -> index
        const map = Object.create(null);

        for (var i = 0; i < nums.length; i++) {
            var second_value = target - nums[i]

            if (map[second_value] !== undefined){
                return [map[second_value], i]
            }

        map[nums[i]] = i
        }
    }
}