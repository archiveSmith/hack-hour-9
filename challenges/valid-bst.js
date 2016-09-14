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
	// base case
	if (tree.left == null && tree.right == null) { return true };

	// false if the left value is > than it's parent value
	if (tree.left.value > tree.value && tree.left.value !== null ) {
		return false; 
	}

	// false if the right value is < than it's parent value
	if (tree.right.value < tree.value && tree.right.value !== null) {
		return false;
	}

	// false if the left or right is not a valid BST recursing down the tree
	if (!validBST(tree.left.value) || !validBST(tree.right.value)) {
		return false; 
	}

	// Passed all the test so it must be true
	return true; 


}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
