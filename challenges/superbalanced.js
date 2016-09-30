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
	let result;
	let root = tree;
	
	if(!root.left && !root.right) {
		 return 0;
	}
	
	let left = superbalanced(root.left);
	if(left === -1) {
		return -1;
	}
	
	let right = superbalanced(root.right);
	if(right === -1) {
		return -1;
	}
	
	let diff = left - right;
	
	if(diff > 1) {
		return -1;
	}
	
	return 1 + Math.max(left, right);
}



var newBST = new BinaryTree(5);
newBST.left = new BinaryTree(10);
newBST.right = new BinaryTree(15);
newBST.left.left = new BinaryTree(20);
newBST.left.right = new BinaryTree(25);
newBST.right.left = new BinaryTree(30);
newBST.right.right = new BinaryTree(35);	
console.log(newBST)
superbalanced(newBST)

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
