const expect = require('chai').expect;
const {BinaryTree, superbalanced, height} = require('./superbalanced');

var tree1 = new BinaryTree(0);
tree1.left = new BinaryTree(1);
tree1.left.left = new BinaryTree(2);
tree1.right = new BinaryTree(3);
tree1.right.left = new BinaryTree(4);
tree1.right.right = new BinaryTree(5);
tree1.right.left.right = new BinaryTree(6);

describe('height', () => {
  describe('normal functionality', () => {
    it('should return 0 if the tree is null', () => {
      expect(height(null)).to.equal(0);
    })

    it('should return 1 if the tree has one node', () => {
      expect(height(new BinaryTree(0))).to.equal(1);
    })

    it('should return the height', () => {
      expect(height(tree1)).to.equal(4);
    })
  })
})

describe('superbalanced', () => {
  beforeEach(() => {
    tree1 = new BinaryTree(0);
    tree1.left = new BinaryTree(1);
    tree1.left.left = new BinaryTree(2);
    tree1.right = new BinaryTree(3);
    tree1.right.left = new BinaryTree(4);
    tree1.right.right = new BinaryTree(5);
    tree1.right.left.right = new BinaryTree(6);
  });

  describe('normal functionality', () => {
    it('should correctly determine if a tree is balanced', () => {
      expect(superbalanced(tree1)).to.be.true;

      tree1.right.left.right.right = new BinaryTree(7);
      expect(superbalanced(tree1)).to.be.false;
    })

    it('should return false if the left tree is not balanced', () => {
      tree1.left.left.left = new BinaryTree(9);
      expect(superbalanced(tree1)).to.be.false;
    });

    it('should return false if the right tree is not balanced', () => {
      tree1.left.right = new BinaryTree(10);
      tree1.left.left.left = new BinaryTree(11);
      tree1.right.left.right.right = new BinaryTree(12);

      expect(superbalanced(tree1)).to.be.false;
    });

    it('should return false if the height difference is greater than 1', () => {
      tree1.right.right.right = new BinaryTree(13);
      tree1.right.left.left = new BinaryTree(14);
      tree1.right.left.left.right = new BinaryTree(15);

      expect(superbalanced(tree1.left)).to.be.true;
      expect(superbalanced(tree1.right)).to.be.true;
      expect(superbalanced(tree1)).to.be.false;
    })
  })
})
