/**
 * Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
 * A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers  = function(matrix) {
  const row = new Array(matrix.length);
  const col = new Array(matrix[0].length);
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    let min = matrix[i][0];
    for (let j = 0; j < matrix[i].length; j++) {
      if (min > matrix[i][j]) min = matrix[i][j];
    }
    row[i] = min;
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let max = matrix[0][i];
    for (let j = 0; j < matrix.length; j++) {
      if (max < matrix[j][i]) max = matrix[j][i];
    }
    col[i] = max;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === row[i] && matrix[i][j] === col[j]) res.push(matrix[i][j]);
    }
  }

  return res;
};


