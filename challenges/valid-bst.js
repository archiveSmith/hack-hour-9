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

}

module.exports = {BinaryTree: BinaryTree, validBST: validBST};


// //
// /* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
//  * a valid binary search tree if it satisfies the following constraints:
//  *      at any given node, the value of all the nodes in its left tree must be <= its value
//  *      at any given node, the value of all the nodes in its right tree must be > its value
//  */
 

// function BinaryTree(val) {
//     this.value = val;
//     this.left = null;
//     this.right = null;
// }

// function validBST(tree) {
// 	console.log(tree)
// 	console.log(tree.value)
// 	console.log(tree.left.value)
// 	console.log(tree.right.value)
	
// 	if(tree.value === null) return true;
// 	if(tree.left.value >= tree.value) return false;
// 	if(tree.right.value < tree.value) return false;
	
	
	
// 	return ( validBST(tree.left) && validBST(tree.right) ? true : false );
// }

// // module.exports = {BinaryTree: BinaryTree, validBST: validBST};

// validBST(myTreeGood)


// var myTreeGood = new BinaryTree(80);
// myTreeGood.left = new BinaryTree(20);
// myTreeGood.left.left = new BinaryTree(5);
// myTreeGood.left.right = new BinaryTree(25);

// myTreeGood.right = new BinaryTree(100);
// myTreeGood.right.left = new BinaryTree(90);
// myTreeGood.right.right =  new BinaryTree(110);

// console.log(myTreeGood)

// var myTreeBad = new BinaryTree(80);
// myTreeBad.left = new BinaryTree(20);
// myTreeBad.left.left = new BinaryTree(25);
// myTreeBad.left.right = new BinaryTree(5);

// myTreeBad.right = new BinaryTree(100);
// myTreeBad.right.left = new BinaryTree(90);
// myTreeBad.right.right =  new BinaryTree(110);


