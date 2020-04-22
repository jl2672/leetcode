/**
 * Given a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var selfDividingNumbers = function(left, right) {
  const res = [];
  for (let i = left; i <= right; i++) {
    if (selfDividing(i)) res.push(i);
  }
  return res;
};

const selfDividing = (num) => {
  const orig = num;
  while (num !== 0) {
    if (orig % (num % 10) !== 0) {
      return false;
    }
    else {
      num = Math.floor(num / 10);
    }
  }
  return true;
};