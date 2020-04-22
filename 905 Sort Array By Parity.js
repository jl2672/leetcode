/**
 * Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.
 * You may return any answer array that satisfies this condition.
 * @param {number[]} A
 * @return {number[]}
 */

var sortArrayByParity = function(A) {
  let start = 0;
  let end = A.length - 1;
  while (start < end) {
    if (A[start] % 2 === 1 && A[end] % 2 === 0) {
      swap(A, start, end);
      start += 1;
      end -= 1;
    }
    else if (A[start] % 2 === 1) end -= 1;
    else if (A[end] % 2 === 0) start += 1;
    else {
      start += 1;
      end -= 1;
    }
  }
  return A;
};

const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
