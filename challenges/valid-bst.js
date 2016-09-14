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

function validBST(tree, val) {
  if (tree.left !== null) {
    validBST(tree.left, tree.val);
    // if (tree.left.value > tree.value) {
    //   return false
    // }
  }

  if (tree.right !== null) {
    validBST(tree.right, tree.val)
      // if (tree.left.value < tree.value) {
      //   return false
      // }
  }

  return true
}

let bst = new BinaryTree(10);
bst.left = new BinaryTree(8);
bst.right = new BinaryTree(12);

console.log(validBST(bst));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };