/**
 * Given two arrays of integers nums and index. Your task is to create target array under the following rules - 
 * 
 * Initially target array is empty.
 * From left to right read nums[i] and index[i], insert at index index[i] the value nums[i] in target array.
 * Repeat the previous step until there are no elements to read in nums and index.
 * 
 * Return the target array.
 * It is guaranteed that the insertion operations will be valid.
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

var createTargetArray = function(nums, index) {
  let res = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    res.splice(index[i], 0, nums[i]);
  };
  return res;
};
