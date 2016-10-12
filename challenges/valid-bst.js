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
	
	if (tree.value === null || tree.value === undefined) return 0;
	
	if (tree.left.value > tree.value) {
		return 1;
	}
	if (tree.right.value <= tree.value) return 1;

	if ((validBST(tree.left) + validBST(tree.right)) > 0) {
		return false;
	} else return true;
}

//traverse down and compare left and right each time
module.exports = {BinaryTree: BinaryTree, validBST: validBST};
