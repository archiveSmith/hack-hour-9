/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function height(treeBranch) {
  if (!treeBranch) return 0;

  if (treeBranch.right) return height(treeBranch.right) + 1;
  if (treeBranch.left) return height(treeBranch.left) + 1;

  return Math.max(height(treeBranch.right), height(treeBranch.left));
}

function superbalanced(tree) {
  return Math.abs(height(tree.right), height(tree.left));
}


module.exports = { BinaryTree, superbalanced };
