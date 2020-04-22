/**
 * In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.
 * Return the element repeated N times.
 * @param {number[]} A
 * @return {number}
 */

var repeatedNTimes = function(A) {
  const numSet = new Set();
  let res = null;
  for (let i = 0; i < A.length; i++) {
    if (numSet.has(A[i])) {
      res = A[i];
      break;
    }
    else numSet.add(A[i]);
  };
  return res;
};
