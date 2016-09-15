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
	let currentNode = tree;
	let isTree = true;
	
	function checkNodes(node) {
		if (node.left) {
			if(node.left.value > node.value) isTree = false;
			let nodeLeft = node.left
			checkNodes(nodeLeft);
		}
		if (node.right) {
			if(node.right.value < node.value) isTree = false;
			let nodeRight = node.right;
			checkNodes(nodeRight);
		}
	}
	checkNodes(currentNode);
	return isTree;
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
