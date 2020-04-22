/**
 * Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.
 * @param {number[][]} A
 * @return {number[][]}
 */

var flipAndInvertImage = function(A) {
  for (let i = 0; i < A.length; i++) {
    let start = 0;
    let end = A[i].length - 1;
    while (start <= end) {
      if (start === end) {
        A[i][start] ^= 1;
        start += 1;
      }
      else {
        A[i][start] ^= 1;
        A[i][end] ^= 1;
        swap(A[i], start, end);
        start += 1;
        end -= 1;
      }
    }
  }
  return A;
};

var swap = function(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}