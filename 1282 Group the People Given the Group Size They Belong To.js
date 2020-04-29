/**
 * There are n people whose IDs go from 0 to n - 1 and each person belongs exactly to one group. 
 * Given the array groupSizes of length n telling the group size each person belongs to, return the groups there are and the people's IDs each group includes.
 * You can return any solution in any order and the same applies for IDs. Also, it is guaranteed that there exists at least one solution. 
 * @param {number[]} groupSizes
 * @return {number[][]}
 */

var groupThePeople = function(groupSizes) {
  const res = [];
  const numMap = new Map();
  for (let i = 0; i < groupSizes.length; i++) {
    if (!numMap.get(groupSizes[i])) numMap.set(groupSizes[i], [i]);
    else numMap.get(groupSizes[i]).push(i);
    if (numMap.get(groupSizes[i]).length === groupSizes[i]) {
      res.push(numMap.get(groupSizes[i]));
      numMap.set(groupSizes[i], []);
    }
  }
  return res;
};
