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
  let originalTree = tree;
  for (let i = tree; i !== null; i = tree.right) {
    console.log('hi')
      //traverse the right side
    while (i) {
      if (i.right) {
        if (i.left > i.value || i.right <= i.value) {
          return false;
        }
      }
      i = i.right;
    }
    //traverse the left side
    while (i !== null) {
      console.log('hi')
      if (i.left) {
        console.log('hi')
        if (i.left > i.value || i.right <= i.value) {
          return false;
        }
      }
      i = i.left;
    }

  }
  for (let i = originalTree; i !== null; i = tree.left) {
    //traverse the right side
    while (i !== null) {
      if (i.right) {
        if (i.left > i.value || i.right <= i.value) {
          return false;
        }
      }
      i = i.right;
    }

    i = orginalTree
      //traverse the left side
    while (i) {
      if (i.left) {
        if (i.left > i.value || i.right <= i.value) {
          return false;
        }
      }
      i = i.left;
    }

  }

  return true;
}

bin = new BinaryTree(8)
bin.left = 1
bin.right = 9

validBST(bin);

module.exports = {
  BinaryTree: BinaryTree,
  validBST: validBST
};
