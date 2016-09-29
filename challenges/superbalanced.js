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
	//get the height of the left subtree and the right subtree and compare them
	//if difference in height is 1 or less, it's balanced; otherwise it's unbalanced
	function height(node){
		if (node === null) {
			return 0;
		} else {
			return max(height(node.left), height(node.right)) + 1;
		}
	};
	// if (tree.left === null && tree.right === null) {
	// 	tree.height = 1;
	// } else {
	// 	tree.height = max(height(tree.left), height(tree.right)) + 1;
	// }
	if (Math.abs(height(tree.left) - height(tree.right)) >= 2) {
		return false;
	}
	return true;
}

// var ten = new BinaryTree(10);
// var five = new BinaryTree(5);
// var four = new BinaryTree(4);
// var eight = new BinaryTree(8);
// var thirty = new BinaryTree(30);
// var twentyeight = new BinaryTree(28);
// var fortytwo = new BinaryTree(42);
// ten.left = five;
// five.left = four;
// five.right = eight;
// ten.right = thirty;
// thirty.left = 
// console.log(ten);

module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
