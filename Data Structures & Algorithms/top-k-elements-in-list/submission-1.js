class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
          const freq = {}

  for (const num of nums) {
    freq[num] = freq[num] ? freq[num] + 1 : 1
  }

  const freqArr = Object.entries(freq)

  freqArr.sort(([, a], [, b]) => b - a)

  const retArr = []

  for (var i = 0; i < k; i++) {
    retArr.push(parseInt(freqArr[i][0]))
  }

  return retArr
    }
}