/**
 * Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function(root, k) {
  const set = new Set();
  return dfs(root, set, k);
};

var dfs = function(root, set, k) {
  if (!root) return false;
  if (set.has(k - root.val)) return true;
  set.add(root.val);
  return dfs(root.left, set, k) || dfs(root.right, set, k);
}
