/**
 * Given two binary search trees root1 and root2.
 * Return a list containing all the integers from both trees sorted in ascending order.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */

var getAllElements = function(root1, root2) {
  const res = [];
  const tree1 = [];
  const tree2 = [];
  dfs(root1, tree1);
  dfs(root2, tree2);
  let i = 0;
  let j = 0;
  while (i < tree1.length && j < tree2.length) {
    if (tree1[i] < tree2[j]) res.push(tree1[i++]);
    else res.push(tree2[j++])
  }
  while (i < tree1.length) res.push(tree1[i++]);
  while (j < tree2.length) res.push(tree2[j++]);
  return res;
};

const dfs = (node, tree) => {
  if (!node) return;
  dfs(node.left, tree);
  tree.push(node.val);
  dfs(node.right, tree);
}
