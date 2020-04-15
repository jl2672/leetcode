/**
 * Given a positive integer num consisting only of digits 6 and 9.
 * Return the maximum number you can get by changing at most one digit (6 becomes 9, and 9 becomes 6).
 * @param {number} num
 * @return {number}
 */

var maximum69Number  = function(num) {
  let numStr = num.toString();
  console.log(numStr);
  let res = [];
  let flag = true;
  for (let i = 0; i < numStr.length; i++) {
    if (flag && numStr[i] === '6') {
      res.push('9');
      flag = false;
    }
    else res.push(numStr[i])
  }
  return parseInt(res.join(''));
};
