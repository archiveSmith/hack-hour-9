const expect = require('chai').expect;
const twoSum = require('./two-sum');

describe('twoSum', function() {
  describe('normal functionality', function() {
    it('should correctly determine whether or not it is possible to sum two numbers to reach the target', function() {
      expect(twoSum([1, 2, 3], 4)).to.be.true;
      expect(twoSum([1, 2, 3], 6)).to.be.false;
    });
  });

  describe('edge case handling', function() {
    it('should return false if the array is empty', function() {
      expect(twoSum([], 3)).to.be.false;
    });

    it('should return undefined if n is a non-number', function() {
      expect(twoSum([1, 2, 3], NaN)).to.be.undefined;
      expect(twoSum([], NaN)).to.be.undefined;
      expect(twoSum([1, 2, 3], 'hello')).to.be.undefined;
    });
  });
});
