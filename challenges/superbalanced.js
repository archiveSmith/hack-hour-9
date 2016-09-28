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

function superbalanced(tree, countR, countL) {
  let count = 1;

  if (tree.right === null) {
    return count;
  };

  let countRi = count + superbalanced(tree.right);
  let countLe = count + superbalanced(tree.right);

  if (countRi - countLe < 1) {
    return true
  }

  return false;
}

let node1 = new BinaryTree(6);
node2 = node1.left = new BinaryTree(5);
node3 = node1.right = new BinaryTree(13);
node4 = node2.right = new BinaryTree(10);
node5 = node2.left = new BinaryTree(4);

// console.log(node1);
console.log(superbalanced(node1));

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };