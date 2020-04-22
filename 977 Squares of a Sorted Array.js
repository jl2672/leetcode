/**
 * Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.
 * @param {number[]} A
 * @return {number[]}
 */

var sortedSquares = function(A) {
  const res = new Array(A.length);
  let j = A.length - 1;
  let start = 0;
  let end = A.length - 1;
  while (start <= end) {
    if (Math.abs(A[start]) > Math.abs(A[end])) {
      res[j] = A[start] * A[start];
      start += 1;
    }
    else {
      res[j] = A[end] * A[end];
      end -= 1;
    }
    j -= 1;
  }
  return res;
};
