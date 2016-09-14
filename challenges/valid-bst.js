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
  let validLeft = true;
  let validRight = true;

  if (tree.left.left || tree.left.right) {
    validLeft = validBST(tree.left);
  }
  if (tree.right.left || tree.right.right) {
    validRight = validBST(tree.right);
  }
  if (tree.left) {
    validLeft = validLeft && tree.left.value < tree.value;
  }
  if (tree.right) {
    validRight = validRight && tree.right.value > tree.value;
  }

  return validLeft && validRight;
}

module.exports = { BinaryTree, validBST };
