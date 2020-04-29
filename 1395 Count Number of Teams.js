/**
 * Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).
 * @param {number[]} rating
 * @return {number}
 */

var numTeams = function(rating) {
  let res = 0;

  for (let i = 0; i < rating.length; i++) {
    let smallerLeft = 0;
    let greaterLeft = 0;
    let smallerRight = 0;
    let greaterRight = 0;

    for (let j = 0; j < i; j++) {
      if (rating[i] > rating[j]) smallerLeft++;
      else greaterLeft++;
    }

    for (let k = i + 1; k < rating.length; k++) {
      if (rating[i] > rating[k]) smallerRight++;
      else greaterRight++;
    }

    res += (smallerLeft * greaterRight) + (smallerRight * greaterLeft);
  }

  return res;
};
