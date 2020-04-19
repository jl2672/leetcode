/**
 * Given an integer n, return any array containing n unique integers such that they add up to 0.
 * @param {number} n
 * @return {number[]}
 */

var sumZero = function(n) {
  const res = [];
  let range = Math.floor(n/2);

  for (let i = -range; i <= range; i++) {
    if (i === 0 && n % 2 === 0) continue;
    res.push(i);
  };

  return res;
};
