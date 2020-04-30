/**
 * Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.
 * Return the minimum number of steps to make t an anagram of s.
 * An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

var minSteps = function(s, t) {
  const hash1 = new Map();
  const hash2 = new Map();

  let same = 0;

  for (char of s) {
    if (hash1.has(char)) hash1.set(char, hash1.get(char) + 1);
    else hash1.set(char, 1);
  }

  for (char of t) {
    if (hash2.has(char)) hash2.set(char, hash2.get(char) + 1);
    else hash2.set(char, 1);
  }

  
  for (let [k, v] of hash1) {
    if (hash2.has(k)) same += Math.min(v, hash2.get(k));
  }

  return s.length - same;
}; 
