/**
 * Given a string S that only contains "I" (increase) or "D" (decrease), let N = S.length.
 * Return any permutation A etc.
 * @param {string} S
 * @return {number[]}
 */

var diStringMatch = function(S) {
  let i = 0;
  let j = S.length;
  let res = [];
  for (let k = 0; k < S.length; k++) {
    if (S[k] === 'I') {
      res.push(i);
      i += 1;
    }
    else {
      res.push(j);
      j -= 1;
    }
  }
  res.push(i);
  return res;
};
