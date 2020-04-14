/**
 * Given an array nums of integers, return how many of them contain an even number of digits.
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
  let res = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i].toString().length % 2 === 0) res += 1;
  };
  return res;
};
