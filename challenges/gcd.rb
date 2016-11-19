# Given two integers, return the greatest common divisor.
#
# Example:
# gcd(10, 8) -> 2
# gcd(10, 9) -> 1

require "test/unit"

def gcd(a, b)

end

class TestGcd < Test::Unit::TestCase

  def test_1
    assert_equal(4, gcd(44, 8), "should find greatest common denominator of 44 and 8").to.be(4);
    assert_equal(4, gcd(8, 44), "should find greatest common denominator of 44 and 8").to.be(4);
  end

  def test_2
    assert_equal(6, gcd(24, 6), "should find the gcd of 24 and 6")
  end

  def test_3
    assert_equal(1, gcd(137, 154), "should return 1 if there is no gcd")
  end

  # uncomment this in when you're ready
  # def test_4
  #   assert_equal(2, gcd(100000000000002, 100000000000004), "should work for very large inputs like (100000000000002, 100000000000004)")
  # end

end
