/**
 * Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.
 * After doing so, return the array.
 * @param {number[]} arr
 * @return {number[]}
 */

var replaceElements = function(arr) {
  if (arr.length === 1) return [-1];
  const res = new Array(arr.length);
  res[arr.length - 1] = -1;
  let currMax = arr[arr.length - 1];
  for (let i = arr.length - 2; 0 <= i; i--) {
    res[i] = currMax;
    if (arr[i] > currMax) currMax = arr[i];
  };
  return res;
};
