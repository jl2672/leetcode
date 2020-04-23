/**
 * Given an array of 2n integers, your task is to group these integers into n pairs of integer, 
 * say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.
 * @param {number[]} nums
 * @return {number}
 */

var arrayPairSum = function(nums) {
  let res = 0;
  nums.sort((a, b) => a - b);
  for (i = 0; i < nums.length; i += 2) {
    res += nums[i];
  }
  return res;
};
