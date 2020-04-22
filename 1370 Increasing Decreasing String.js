/** 
 * Return the result string after sorting s with this algorithm.
 * @param {string} s
 * @return {string}
 */

var sortString = function(s) {
  const counts = new Array(26).fill(0);
  const res = [];

  for (let i = 0; i < s.length; i++) {
    const pos = s.charCodeAt(i) - 'a'.charCodeAt(0);
    counts[pos] += 1;
  }

  while (res.length < s.length) {
    for (let i = 0; i < counts.length; i++) {
      if (counts[i] !== 0) {
        res.push(String.fromCharCode(i + 'a'.charCodeAt(0)));
        counts[i] -= 1;
      }
    }
    for (let j = counts.length - 1; j > -1; j--) {
      if (counts[j] !== 0) {
        res.push(String.fromCharCode(j + 'a'.charCodeAt(0)));
        counts[j] -= 1;
      }
    }
  }
  return res.join('');
};
