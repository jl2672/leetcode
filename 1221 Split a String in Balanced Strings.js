/**
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.
 * Given a balanced string s split it in the maximum amount of balanced strings.
 * Return the maximum amount of splitted balanced strings.
 * @param {string} s
 * @return {number}
 */

var balancedStringSplit = function(s) {
    let res = 0;
    let curr = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === 'L') curr -= 1;
      else curr += 1;
      if (curr === 0) res += 1;
    };
    return res;
};
