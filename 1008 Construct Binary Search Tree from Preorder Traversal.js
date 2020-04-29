/**
 * Return the root node of a binary search tree that matches the given preorder traversal.
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

var bstFromPreorder = function(preorder) {
  let i = 0;
  return dfs(preorder, Infinity)

  function dfs(arr, bound) {
    if (i >= preorder.length || preorder[i] > bound) return null;
    const root = new TreeNode(preorder[i]);
    i++;
    root.left = dfs(arr, root.val);
    root.right = dfs(arr, bound);
    return root;
  }
};
