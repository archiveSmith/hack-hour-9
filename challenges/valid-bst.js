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
    var isLeftValid = true;
    var isRightValid = true;

    // edge case
    if(tree === null) {
        return false;
    }

    // check if left side valid
    if(tree.left !== null) { // check if left child exists
        if(tree.left.value <= tree.value) { // valid
            // recursive check
            isLeftValid = validBST(tree.left);
        } else { // invalid left
            isLeftValid = false;
        }
    }

    // check if right side valid
    if(tree.right !== null) { // check if right child exists
        if(tree.right.value > tree.value) { // valid
            // recursive check
            isRightValid = validBST(tree.right);
        } else { // invalid right
            isRightValid = false;
        }
    }
    
    // if either side is invalid, then false is returned
    return isLeftValid && isRightValid;
}

/* tests */
/*
var root = new BinaryTree(10);
root.left = new BinaryTree(5);
root.right = new BinaryTree(15);

console.log(validBST(root)); // expect true

root.left.left = new BinaryTree(4);
root.left.right = new BinaryTree(7);
root.right.left = new BinaryTree(12);

console.log(validBST(root)); // expect true

root.right.right = new BinaryTree(14);

console.log(validBST(root)); // expect false

root.left.left.right = new BinaryTree(2);

console.log(validBST(root)); // expect false
*/

module.exports = {BinaryTree: BinaryTree, validBST: validBST};
