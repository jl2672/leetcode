/**
 * Given a binary tree, return the sum of values of its deepest leaves.
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

var deepestLeavesSum = function(root) {
  let q = [root];
  let children = [];
  let sum = 0;

  while (q.length) {
    children = [];
    sum = 0;

    for (let i = 0; i < q.length; i++) {
      const curr = q[i];
      sum += curr.val;
      if (curr.left) children.push(curr.left);
      if (curr.right) children.push(curr.right);
    }
    q = children;
  }
  return sum;
};
