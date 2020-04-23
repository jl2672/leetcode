/**
 * Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.
 * @param {number[]} arr
 * @return {boolean}
 */

var uniqueOccurrences = function(arr) {
  const numMap = new Map();
  const numSet = new Set();

  for (num of arr) {
    if (numMap.has(num)) numMap.set(num, numMap.get(num) + 1);
    else numMap.set(num, 1);
  }

  for (let [k, v] of numMap) {
    if (numSet.has(v)) return false;
    else numSet.add(v);
  }
  
  return true;
};
