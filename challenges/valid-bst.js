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
    
    if(this.left != null || this.right != null){
    	if(this.left > this.value || this.right <= this.value){
        	return false;
    	}
    	else{
        	return validBSD(this.left) && validBSD(this.right);
    	}
    }
	else {
		return true;
	}  
}

// let hi = new BinaryTree(10);
// hi.left = 5;
// hi.right = 18;
// hi.left.left = 4;
// hi.left.right = 6;
// hi.right.left = 25;
// hi.right.right = 19;

// validBST(hi);

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
