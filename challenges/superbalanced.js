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

	// empty tree is balanced
	if(tree === null) {
		return true;
	}
	
	// tree with single node is balanced
	if(tree.left === null && tree.right === null) {
		return true;
	}
	
	// tree is superbalanced if difference between heights of left subtree and right subtree is not more than 1
	// AND left side is superbalanced
	// AND right side is superbalanced
	return (Math.abs(findHeight(tree.left) - findHeight(tree.right)) <= 1) && superbalanced(tree.left) && superbalanced(tree.right);

}

// Helper function to find height at particular tree node
function findHeight(tree) {
	
	if(tree === null) {
		return 0;
	}
	
	return Math.max(findHeight(tree.left), findHeight(tree.right)) + 1;
}

/*
var t1 = new BinaryTree(1);
var t2 = new BinaryTree(2);
var t3 = new BinaryTree(3);
var t4 = new BinaryTree(4);
var t5 = new BinaryTree(5);
var t6 = new BinaryTree(6);
var t7 = new BinaryTree(7);
var t8 = new BinaryTree(8);
var t9 = new BinaryTree(9);

t1.left = t2;
t1.right = t3;

t2.left = t4;
t2.right = t6;
t6.left = t5;

t3.right = t7;

console.log(superbalanced(t1)); // expect true

t7.right = t8;
console.log(superbalanced(t1)); // expect false
*/

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
