/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  // we stop counting height when both left and right are zero.
  //each node adds one to the height (either heightleft or heightright)
  //each node has its own heightleft and heightright -- so this should be tracked in recursive call
  //if any node's height is unbalanced, the rest of the tree unbalanced too
  //if we ever encounter unbalanced heights in sub-branches, return false
  //otherwise see if nodes are unbalanced
  //traverse all the nodes until all of them return height of 0 (end of branch)
  	
  function helper(tree){
  	tree.heightleft = 0;
    tree.heightright = 0;
    if (tree.left != null){
      tree.heightleft ++;
      helper(tree.left);
      console.log('hit left node', tree.left.value)
      console.log('heightleft', tree.heightleft);
    }
    if (tree.right != null){
      tree.heightright ++;
      helper(tree.right)
      console.log('hit right node', tree.right.value)
      console.log('heightright', tree.heightright);
    }
    if (Math.abs(tree.heightright - tree.heightleft)>1){
      return false
    }
    console.log('heightleft', tree.heightleft);
    console.log('heightright', tree.heightright);
  }
  if(helper(tree) === false){
    return false;
  }
  else { return true; }
  function helper(tree){
  	tree.heightleft = 0;
    tree.heightright = 0;
    if (tree.left != null){
      tree.heightleft ++;
      helper(tree.left);
      console.log('hit left node', tree.left.value)
      console.log('heightleft', tree.heightleft);
    }
    if (tree.right != null){
      tree.heightright ++;
      helper(tree.right)
      console.log('hit right node', tree.right.value)
      console.log('heightright', tree.heightright);
    }
    if (Math.abs(tree.heightright - tree.heightleft)>1){
      return false
    }
  }
 }
}


module.exports = {BinaryTree: BinaryTree, superbalanced: superbalanced};
