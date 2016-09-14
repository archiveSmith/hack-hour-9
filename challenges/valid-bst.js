/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree) {
  if (!tree || (!tree.left && !tree.right)) return true;
  if ((!tree.left || tree.left.value <= tree.value) && (!tree.right || tree.right.value > tree.value)) {
    return (validBST(tree.right) && validBST(tree.left));
  }
  return false;
}

// tests
// let newTree = new BinaryTree(6);
// newTree.left = new BinaryTree(5);
// newTree.right = new BinaryTree(7);
// validBST(newTree);

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
