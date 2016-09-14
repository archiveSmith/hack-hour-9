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
	let root = tree.value;
	

	function inner(innertree, root) {
		root =  root || tree.value; 
	if(tree.left) {
		if(innertree.left.value <= root) {
			inner(innertree.left, innertree.left.value);
		} else {
			return false;
		}
	} 
	
	if(tree.right) {
		if(innertree.right.value > root) {
			inner(innertree.right, innertree.right.value);
		} else {
			return false;
		}
	}
	return true;
	}
	inner(tree, root);
	

}

var bst = new BinaryTree(8);
bst.left = new BinaryTree(4);
bst.left.left = new BinaryTree(2);
bst.right = new BinaryTree(9);
bst.right.right = new BinaryTree(12);
//console.log(bst);

validBST(bst)

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
