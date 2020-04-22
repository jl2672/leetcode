/**
 * Return the string formed after mapping.
 * It's guaranteed that a unique mapping will always exist.
 * @param {string} s
 * @return {string}
 */

var freqAlphabets = function(s) {
  const dict = new Map();
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (i < s.length - 2 && s[i + 2] === '#') {
      const code = 'a'.charCodeAt(0) + (parseInt(s[i]) * 10) + parseInt(s[i + 1]) - 1;
      res.push(String.fromCharCode(code));
      i += 2;
    }
    else {
      const code = 'a'.charCodeAt(0) + parseInt(s[i]) - 1;
      res.push(String.fromCharCode(code));
    }
  }
  return res.join('');
};
