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
  if (tree.left) {
    if (tree.left < tree.value) {
      return validBST(tree.left);
    }
    return false;
  }
  if (tree.right) {
    if (tree.right > tree.value) {
      return validBST(tree.right);
    }
    return false;
  }
  return true;
}


module.exports = { BinaryTree, validBST };
