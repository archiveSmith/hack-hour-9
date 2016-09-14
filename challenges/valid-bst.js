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

BinarySearchTree.prototype.add = function (value) {
  let right = this.value < value;
  if (right && this.right === null) {
    this.right = new BinarySearchTree(value);
  } else if (!right && this.left === null) {
    this.left = new BinarySearchTree(value);
  } else {
    if (right) {
      this.right.add(value);
    } else {
      this.left.add(value);
    }
  }

};

function validBST(tree) {
if (tree.value === null) return true;
if (tree.left > tree.value) return false;
if (tree.right <= tree.value) return false;
return validBST(tree.left) && validBST(tree.right);


}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
