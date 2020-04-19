/**
 * Given a m * n matrix grid which is sorted in non-increasing order both row-wise and column-wise. 
 * Return the number of negative numbers in grid.
 * @param {number[][]} grid
 * @return {number}
 */

var countNegatives = function(grid) {
  const n = grid[0].length;
  const m = grid.length;

  let res = 0;
  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    if (grid[i][j] < 0) {
      res += m - i;
      j -= 1;
    }
    else {
      i += 1;
    }
  }
  return res;
};
