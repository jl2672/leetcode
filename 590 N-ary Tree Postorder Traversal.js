/**
 * Given an n-ary tree, return the postorder traversal of its nodes' values.
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 * postorder - left, right, root
 * @param {Node} root
 * @return {number[]}
 */

var postorder = function(root) {
  const res = [];
  dfs(root, res);
  return res;
};

const dfs = (root, res) => {
  if (!root) return;
  if (root.children) {
    for (child of root.children) {
      dfs(child, res);
    }
  }
  res.push(root.val);
};
