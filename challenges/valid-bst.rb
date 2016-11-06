# You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
# a valid binary search tree if it satisfies the following constraints:
# at any given node, the value of all the nodes in its left tree must be <= its value
# at any given node, the value of all the nodes in its right tree must be > its value

require "test/unit"

class BinaryTree
  attr_accessor :left, :right
  attr_reader :value

  def initialize(val)
    @value = val
    @left = nil
    @right = nil
  end
end

def validBST(tree)

end

# --- Tests ---
class TestValidBST < Test::Unit::TestCase

  def setup
    @tree = BinaryTree.new(10)
    @tree.left = BinaryTree.new(5)
    @tree.left.left = BinaryTree.new(3)
    @tree.left.right = BinaryTree.new(6)
    @tree.right = BinaryTree.new(14)
  end

  def test_1
    @tree.left = nil
    @tree.right = nil
    assert_equal(true, validBST(@tree), "returns true for tree with single node")
    expect(validBST(tree)).to.eql(true)
  end

  def test_2
    @tree.left = BinaryTree.new(5)
    @tree.right = BinaryTree.new(15)
    assert_equal(true, validBST(@tree), "returns true for valid tree with height of 1")
  end

  def test_3
    @tree.left = BinaryTree.new(11)
    @tree.right = BinaryTree.new(15)
    assert_equal(false, validBST(tree), "returns false for invalid left tree with height of 1")
  end

  def test_4
    @tree.left = BinaryTree.new(8)
    @tree.right = BinaryTree.new(9)
    assert_equal(false, validBST(@tree), "returns false for invalid right tree wdef testh height of 1")
  end

  def test_5
    assert_equal(true, validBST(@tree), "returns true for deeper valid BST")
  end

  def test_6
    @tree.left.left.left = BinaryTree.new(4)
    assert_equal(false, validBST(@tree), "returns false for deeper left leaning invalid BST")
  end

  def test_7
    @tree.right.right = BinaryTree.new(13)
    assert_equal(false, validBST(@tree), "returns false for deeper right leaning invalid BST")
  end

  def test_8
    @tree.left.right = BinaryTree.new(4)
    assert_equal(false, validBST(@tree), "returns false when left right child < left child")
  end

  def test_9
    @tree.right.left = BinaryTree.new(15)
    assert_equal(false, validBST(@tree), "returns false when right left child > right child")
  end

  def test_10
    @tree.left.right.right = BinaryTree.new(11)
    assert_equal(false, validBST(@tree), "returns false when leaf is valid to def tests parent but not to grandparent (left-right case)")
  end

  def test_11
    @tree.right.left = BinaryTree.new(9)
    assert_equal(false, validBST(@tree), "returns false when leaf is valid to its parent but not to grandparent (right-left case)")
  end

end
