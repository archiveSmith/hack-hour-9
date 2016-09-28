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
  if (countHieght(tree) === false) {
    return false;
  }
  let leftOut;
  let rightOut;
  let left = tree.left;
  let right = tree.right;
  while (left) {
    if (leftOut === false) {
      return false;
    }
    leftOut = countHieght(left);
    left = left.left;
  }
  while (right) {
    if (rightOut === false) {
      return false;
    }
    rightOut = countHieght(right);
    right = right.right;
  }
  return true;
}

function countHieght(tree) {
  let leftCount = 0;
  let rightCount = 0;
  let left = tree.left;
  let right = tree.right;

  while (left) {
    leftCount++;
    left = left.left;
  }
  while (right) {
    rightCount++;
    right = right.right;
  }
  if (Math.abs(leftCount - rightCount) > 1) {
    return false;
  }
  return true;
}

// test data
// let myTree = new BinaryTree(1);
// myTree.left = new BinaryTree(2);
// mytree.right = new BinaryTree(3);

// superbalanced(myTree);

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
