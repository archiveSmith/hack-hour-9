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
	let results = [];
	function isBSTpre(tree) {
		if (tree.left) {
			isBSTpre(tree.left);
		} 
		results.push(tree.value);
		if (tree.right) {
			isBSTpre(tree.right);
		}
	}
	isBSTpre(tree);
	let isValid = true;
	for (let i = 1; i < results.length; i++) {
		if (results[i] < results[i - 1]) {
			isValid = false;
		}
	}
	return isValid;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
