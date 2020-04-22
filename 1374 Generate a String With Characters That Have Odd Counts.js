/**
 * Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.
 * The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  
 * @param {number} n
 * @return {string}
 */

var generateTheString = function(n) {
  const res = [];

  for (let i = 0; i < n; i++) {
    res.push('a');
  };

  if (n % 2 === 0) res[0] = 'b';
  return res.join('');
};
