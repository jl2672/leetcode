/**
 * Given the root of a binary search tree with distinct values, modify it so that every node has a new value 
 * equal to the sum of the values of the original tree that are greater than or equal to node.val.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var bstToGst = function(root) {
  let sum = 0;
  dfs(root);
  return root;

  function dfs(node) {
    if (node.right) dfs(node.right);
    sum += node.val;
    node.val = sum;
    if (node.left) dfs(node.left);
  }
};
