/**
 * Given an array that is definitely a mountain, return any i such that A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1].
 * @param {number[]} A
 * @return {number}
 */

var peakIndexInMountainArray = function(A) {
  let start = 0;
  let end = A.length - 1;
  let mid = (end + start) / 2;

  while (start < end) {
    mid = Math.floor((end + start) / 2);
    if (A[mid] > A[mid + 1] && A[mid] > A[mid - 1]) return mid;
    if (A[mid] < A[mid + 1]) {
      start = mid;
    }
    else {
      end = mid;
    }

  }
  return mid;
};
