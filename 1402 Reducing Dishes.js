/**
 * Return the maximum sum of Like-time coefficient that the chef can obtain after dishes preparation.
 * Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.
 * @param {number[]} satisfaction
 * @return {number}
 */

var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => a - b);

  let sum = cur = res = 0;

  for (let i = satisfaction.length - 1; i >= 0; i--) {
    sum += satisfaction[i];
    cur += sum;
    res = Math.max(res, cur);
  }
  return res;
};
