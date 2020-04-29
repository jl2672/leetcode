/**
 * Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)
 * If there are no nodes with an even-valued grandparent, return 0.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var sumEvenGrandparent = function(root) {
  return dfs(root, null, null);
};

const dfs = (root, p, gp) => {
  let sum = 0;
  if (gp && gp.val % 2 === 0) sum += root.val;
  if (root.left) sum += dfs(root.left, root, p);
  if (root.right) sum += dfs(root.right, root, p);
  return sum;
};
