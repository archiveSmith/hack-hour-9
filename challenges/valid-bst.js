/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 

/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be <= its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 */
 

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
// var twentyseven = new BinaryTree(27);
// var fourteen = new BinaryTree(14);
// var ten = new BinaryTree(10);
// var nineteen = new BinaryTree(19);
// var thirtyfive = new BinaryTree(35);
// var thirtyone = new BinaryTree(31);
// var fortytwo = new BinaryTree(42);
// twentyseven.left = fourteen;
// twentyseven.right = thirtyfive;
// fourteen.left = ten;
// fourteen.right = nineteen;
// thirtyfive.left = thirtyone;
// thirtyfive.right = fortytwo;


function validBST(tree) {
	//is val always a number?
	if (tree.left !== null){
		if (tree.left > tree.val){
			return false;
		}
		return validBST(tree.left);
	}
	if (tree.right !== null){
		if (tree.right <= tree.val){
			return false;
		}
		return validBST(tree.right);
	}
	return true;
	//while this.left or this.right is not null,
	// if a tree's left is not <= val, return false
	// if a tree's right is not > val, return false
	//otherwise, traverse down each node and repeat function
	//when done checking all nodes, return true;
	
}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
