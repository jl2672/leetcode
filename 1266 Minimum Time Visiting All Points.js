/**
 * On a plane there are n points with integer coordinates points[i] = [xi, yi]. Your task is to find the minimum time in seconds to visit all points.
 * You can move according to the next rules -
 * 
 * In one second always you can either move vertically, horizontally by one unit or diagonally (it means to move one unit vertically and one unit horizontally in one second).
 * You have to visit the points in the same order as they appear in the array.
 * @param {number[][]} points
 * @return {number}
 */

var minTimeToVisitAllPoints = function(points) {
  let res = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let A = points[i];
    let B = points[i + 1];
    res += Math.max(Math.abs(A[0] - B[0]), Math.abs(A[1] - B[1]));
  }
  return res;
};
