/**
 * Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
 * @param {string} str
 * @return {string}
 */

var toLowerCase = function(str) {
  const res = []
  const diff = Math.abs('A'.charCodeAt(0) - 'a'.charCodeAt(0));
  for (let char of str) {
    const index = char.charCodeAt(0);
    if (index >= 65 && index <= 90) {
        char = String.fromCharCode(index + diff);
    }
    res.push(char);
  }
  return res.join('');
};
