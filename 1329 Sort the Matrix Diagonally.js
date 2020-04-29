/**
 * Given a m * n matrix mat of integers, sort it diagonally in ascending order from the top-left to the bottom-right then return the sorted array.
 * @param {number[][]} mat
 * @return {number[][]}
 */

var diagonalSort = function(mat) {
  const getIndices = (row, col) => {
      let indices = [];
      do {
          indices.push({ row, col, val: mat[row++][col++] });
      } while (row >=0 && row < mat.length && col >=0 && col < mat[row].length);
      return indices;
  }
  
  const sort = indices => {
      const sortedIndices = [...indices].sort((a, b) => a.val - b.val);
      for (let i = 0; i < indices.length; i++) {
          const { row, col } = indices[i];
          const { val } = sortedIndices[i];
          mat[row][col] = val;
      }
  }
  
  const rowCount = mat.length;
  const colCount = mat[0].length;
  
  for (let row = 0; row < rowCount; row++) {
      if (row === 0) {
          for (let col = 0; col < colCount; col++) {
            sort(getIndices(row, col));
          }
      } else {
          sort(getIndices(row, 0));
      }
  }
  
  return mat;
};
