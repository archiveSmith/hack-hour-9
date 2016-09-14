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
  if (tree === null) return false;

  while (this.left) {
    if (this.left.left > this.left.right || this.left.right < this.left.left) return false;
  }

  while (this.right) {
    if (this.rigth.left > this.right.rigth || this.rigth.right < this.rigth.left) return false; 
  }

  return true;
}


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
