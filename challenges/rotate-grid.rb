# You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
# the ith row in the grid.
#
# Write a function to rotate the grid 90 degrees clockwise.
#
# For example:     sampleGrid before:  [   [1, 2, 3],
#                                          [4, 5, 6],
#                                          [7, 8, 9]  ]
#
#                  rotateGrid(sampleGrid, 3);
#
#                  sampleGrid after:   [   [7, 4, 1],
#                                          [8, 5, 2],
#                                          [9, 6, 3]  ]
#
# BONUS: Do this in place

require "test/unit"

def rotateGrid(grid, n)

end

# --- tests ---
class TestRotateGrid < Test::Unit::TestCase

  def test_1
    assert_equal([[1, 7], [2, 8]].to_s, rotateGrid([[7,8],[1,2]],2).to_s, "should rotate grid 90 degrees and display 2x2 grid")
    assert_equal([[7, 3], [8, 4]].to_s, rotateGrid([[3,4],[7,8]],2).to_s, "should rotate grid 90 degrees and display 2x2 grid")
    assert_equal([[4, 1], [5, 2]].to_s, rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]],2).to_s, "should rotate grid 90 degrees and display 2x2 grid")
  end

  def test_2
    assert_equal([[7, 4, 1], [8, 5, 2], [9, 6, 3]].to_s, rotateGrid([[1, 2, 3],[4, 5, 6],[7, 8, 9]],3).to_s, "should rotate a 3x3 grid")
    assert_equal([[4, 1, 7], [5, 2, 8], [6, 3, 9]].to_s, rotateGrid([[7,8,9],[1,2,3],[4,5,6]],3).to_s, "should rotate a 3x3 grid")
  end

  def test_3
    start = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16,17]]
    solution = [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]
    assert_equal(solution.to_s, rotateGrid(start, 4).to_s, "should work with a 4x4 grid")
  end

end
