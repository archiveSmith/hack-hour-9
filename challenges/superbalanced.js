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

function superbalanced(tree) {
  if (tree === null) return true;

  const rightTreeIsBalanced = superbalanced(tree.right);
  const leftTreeIsBalanced = superbalanced(tree.left);
  const heightDifference = Math.abs(height(tree.left) - height(tree.right));

  return rightTreeIsBalanced && leftTreeIsBalanced && heightDifference <= 1;
}

function height(tree) {
  if (tree === null) return 0;
  if (tree.left === null && tree.right === null) return 1;

  return Math.max(height(tree.left), height(tree.right)) + 1;
}

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
