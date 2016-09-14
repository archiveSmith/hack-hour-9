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
	function allTreeValues(tree) {
		if (tree.left === null && tree.right === null) {
			// console.log('tree.value', tree.value);
			return [tree.value];
		} else if (tree.left !== null && tree.right === null) {
			return [tree.value].concat(allTreeValues(tree.left));
		} else if (tree.left === null && tree.right !== null) {
			return [tree.value].concat(allTreeValues(tree.right));
		} else if (tree.left !== null && tree.right !== null) {
			return [tree.value].concat(allTreeValues(tree.left)).concat(allTreeValues(tree.right))
		}
	}
	
	if (tree.left === null && tree.right === null) {
		return true;
	} else  {
		let val = tree.value;
		let leftValues = allTreeValues(tree.left);
		let rightValues = allTreeValues(tree.right);
		if (tree.left.value > val || Math.max(...leftValues) > val || tree.right.value < val || Math.min(...rightValues) < val) {
			return false;
		} else {
			return validBST(tree.left) && validBST(tree.right)
		}
	}
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
