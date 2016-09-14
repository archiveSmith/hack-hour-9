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

function validBST(tree){
   if(!tree){
     return true; 
  }

  if(tree.left !== null && tree.left.value > tree.value){ 
    return false;
  }

  if(tree.right !==null && tree.right.value < tree.value) {
    return false;
  }

  if(!isBST(tree.left) || !isBST(tree.right)) {
    return false;
  }

  return true;  
}



module.exports = {BinaryTree: BinaryTree, validBST: validBST};
