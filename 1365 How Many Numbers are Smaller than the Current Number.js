/**
 * Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
 * That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
 * Return the answer in an array.
 * @param {number[]} nums
 * @return {number[]}
 */

var smallerNumbersThanCurrent = function(nums) {
  const bucket = new Array(101).fill(0);
  for (let i = 0; i < nums.length; i++) {
    bucket[nums[i]] += 1;
  };
  for (let j = 1; j < bucket.length; j++) {
    bucket[j] += bucket[j - 1];
  };
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) res.push(bucket[nums[i] - 1]);
    else res.push(0);
  };
  return res;
};
