/**
 * Construct the maximum tree by the given array and output the root node of this tree.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null;

  let max = nums[0];
  let index = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      index = i;
    }
  }

  const root = new TreeNode(max);
  root.left = constructMaximumBinaryTree(nums.slice(0, index));
  root.right = constructMaximumBinaryTree(nums.slice(index + 1, nums.length));

  return root;
};
