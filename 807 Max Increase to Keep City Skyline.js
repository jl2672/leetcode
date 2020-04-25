/**
 * What is the maximum total sum that the height of the buildings can be increased?
 * @param {number[][]} grid
 * @return {number}
 */

var maxIncreaseKeepingSkyline = function(grid) {
  const maxRow = [];
  const maxCol = [];
  for (row of grid) {
    let max = 0;
    for (ele of row) {
      if (ele > max) max = ele;
    }
    maxRow.push(max);
  }

  for (let i = 0; i < grid[0].length; i++) {
    let max = 0;
    for (let j = 0; j < grid.length; j++) {
      if (grid[j][i] > max) max = grid[j][i];
    }
    maxCol.push(max);
  }

  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      res += Math.min(maxRow[i], maxCol[j]) - grid[i][j];
    }
  }

  return res;
};
