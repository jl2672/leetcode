/**
 * Given an n-ary tree, return the preorder traversal of its nodes' values.
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * preorder - root, left, right
 * @param {Node} root
 * @return {number[]}
 */

var preorder = function(root) {
  const res = [];
  dfs(root, res);
  return res;
}

const dfs = (root, res) => {
  if (!root) return;
  res.push(root.val);
  if (root.children) {
    for (child of root.children) {
      dfs(child, res);
    }
  }
}