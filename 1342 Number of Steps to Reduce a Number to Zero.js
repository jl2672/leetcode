/** Given a non-negative integer num, return the number of steps to reduce it to zero. 
 * If the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
 * @param {number} num
 * @return {number}
 */

var numberOfSteps  = function(num) {
    let res = 0;
    while (num) {
      if (num & 1) res += 2;
      else res += 1;
      num >>= 1;
    };
    return res - 1;
};