// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    const account = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;
        if (account.has(diff)) {
            return [account.get(diff), i];
        } else if(!account.has(num)) {
            account.set(num, i);
        }
    }
};

console.log(twoSum([2,7,11,15], 9));

// Runtime: 109 ms, faster than 71.80% of JavaScript online submissions for Two Sum.
// Memory Usage: 43.2 MB, less than 25.80% of JavaScript online submissions for Two Sum.