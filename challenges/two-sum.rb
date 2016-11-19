require "test/unit"

def twoSum(arr, n)
  return true
end


class TestTwoSum < Test::Unit::TestCase

  def test_1
    assert_equal(true, twoSum([1,4,6,12,9], 10))
  end

  def test_2
    assert_equal(true, twoSum([1,4,6,12,9],16))
  end

  def test_3
    assert_equal(true, twoSum([1,4,7,2,9,0], 7))
  end

  def test_4
    assert_equal(false, twoSum([1,4,6,12,9], 2))
  end

  def test_5
    assert_equal(false, twoSum([1,4,7,2,9], 7))
  end

  def test_6
    assert_equal(true, twoSum([-1,4,6,12,9],8))
  end

end
