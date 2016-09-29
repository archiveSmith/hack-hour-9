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
	if (tree === null) return false;
	var leftHeight = goDown(tree.left);
	var rightHeight = goDown(tree.right);
  if (Math.abs(leftHeight-rightHeight) > 1){
			return false;
	}
	return true;
}


  function goDown(treeLeft, treeRight, height){ 
  	if (treeNode === null) return 0;
  	else {
  		return Math.max(goDown(treeNode.left), goDown(treeNode.right)) + 1;
  	}

  }

// var myBST = new BinaryTree(1)
// myBST.left = new BinaryTree(4)
// myBST.right = new BinaryTree(7)
// myBST.left.left = new BinaryTree(11)
// myBST.left.right = new BinaryTree(1)
// myBST.right.left = new BinaryTree(6)
// myBST.right.right = new BinaryTree(1)


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
