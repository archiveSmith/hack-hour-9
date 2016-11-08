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
	//DFS
	let stack = [tree];
	
	while(stack.length) {
		let node = stack.pop();
		if(node.left) {
			stack.push(node.left);
			if(node.left.value > node.value) {
				return false;
			}
		}
		if(node.right) {
			stack.push(node.right);
			if(node.right.value <= node.value) {
				return false;
			}
		}
	}
	return true;
}

var bst = new BinaryTree(8);
bst.left = new BinaryTree(1);
bst.left.right = new BinaryTree(2);
bst.right = new BinaryTree(3);
bst.right.right = new BinaryTree(12);

validBST(bst)


module.exports = {BinaryTree: BinaryTree, validBST: validBST};
