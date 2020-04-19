/**
 * Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.
 * @param {string} S
 * @return {string}
 */

var removeOuterParentheses = function(S) {
  if (S.length === 0 || S.length === 2) return '';
  let res = [];

  let count = 0;
  let prev = 0;

  for (let i = 0; i < S.length; i++) {
    if (S[i] === '(') count += 1;
    else count -= 1;
    if (count !== 0 && prev !== 0) res.push(S[i]);
    prev = count;
  }
  return res.join('');
};
