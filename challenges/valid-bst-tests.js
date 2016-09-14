const expect = require('chai').expect;
const BinaryTree = require('./valid-bst').BinaryTree;
const validBST = require('./valid-bst').validBST;

describe('validBST', function() {
  let validTree, invalidLeftTree, invalidRightTree;
  beforeEach(function() {
    validTree = new BinaryTree(5);
    validTree.left = new BinaryTree(3);
    validTree.left.left = new BinaryTree(2);
    validTree.left.right = new BinaryTree(4);
    validTree.right = new BinaryTree(8);
    validTree.right.left = new BinaryTree(7);
  });

  describe('normal functionality', function() {
    it('should correctly identify if a tree is valid', function() {
      expect(validBST(validTree)).to.be.true;

      validTree.left.value = 9;
      expect(validBST(validTree)).to.be.false;
    });

    it('should ensure that values on the left are less than or equal to the root value', function() {
      const tree = new BinaryTree(4);
      tree.left = new BinaryTree(4);

      expect(validBST(tree)).to.be.true;

      tree.left.value = 5;
      expect(validBST(tree)).to.be.false;
    });

    it('should ensure that the values on the right are strictly greater than the root value', function() {
      const tree = new BinaryTree(4);
      tree.right = new BinaryTree(5);

      expect(validBST(tree)).to.be.true;

      tree.right.value = 4;
      expect(validBST(tree)).to.be.false;

      tree.right.value = 3;
      expect(validBST(tree)).to.be.false;
    })
  });

  describe('edge case handling', function() {
    it('should return true if the tree has no branches', function() {
      const node = new BinaryTree(1);
      expect(validBST(node)).to.be.true;
    });
  });
});
