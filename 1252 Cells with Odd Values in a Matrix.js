/**
 * Given n and m which are the dimensions of a matrix initialized by zeros and given an array indices where indices[i] = [ri, ci]. 
 * For each pair of [ri, ci] you have to increment all cells in row ri and column ci by 1.
 * Return the number of cells with odd values in the matrix after applying the increment to all indices.
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */

var oddCells = function(n, m, indices) {
  const oddRows = new Array(n).fill(false);
  const oddColumns = new Array(m).fill(false);
  for (let i = 0; i < indices.length; i++) {
    oddRows[indices[i][0]] = !oddRows[indices[i][0]];
    oddColumns[indices[i][1]] = !oddColumns[indices[i][1]];
  }
  let cntRow = 0;
  let cntCol = 0;
  for (let row of oddRows) {
    if (row) cntRow += 1;
  }
  for (let col of oddColumns) {
    if (col) cntCol += 1;
  }
  return (m * cntRow) + (n * cntCol) - (2 * cntRow * cntCol);
};
