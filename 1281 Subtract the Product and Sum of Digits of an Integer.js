/**
 * Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function(n) {
  let product = 1;
  let sum = 0;

  while (n >= 1) {
    let digit = n % 10;
    product *= digit;
    sum += digit;
    n = Math.floor(n / 10.0);
  }
  return product - sum;
};
