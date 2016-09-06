const expect = require('chai').expect;
const bestProfit = require('./apple-stocks');

describe('bestProfit', function() {
  describe('edge case handling', function() {
    it('should return 0 if the input is not an array', function() {
      expect(bestProfit()).to.equal(0);
      expect(bestProfit('hello')).to.equal(0);
      expect(bestProfit(null)).to.equal(0);
      expect(bestProfit(1, 2, 3)).to.equal(0);
    });

    it('should return 0 if te input array has length 0', function() {
      expect(bestProfit([])).to.equal(0);
    });

    it('should return 0 if the input array contains a non-number', function() {
      expect(bestProfit([1, 2, 3, 'hello'])).to.equal(0);
    });

    it('should return 0 if the input array contains NaN', function() {
      expect(bestProfit([1, 2, 3, NaN])).to.equal(0);
    });

    it('should return 0 if the input array contains a negative number', function() {
      expect(bestProfit([1, 2, 3, -1])).to.equal(0);
    });
  });

  describe('core functionality', function() {
    it('should return the best profit possible', function() {
      expect(bestProfit([1, 2, 3, 4])).to.equal(3);
      expect(bestProfit([1, 2, 3, 1])).to.equal(2);
      expect(bestProfit([1])).to.equal(0);
    });

    it('should return 0 if no profit is possible', function() {
      expect(bestProfit([4, 3, 2, 1])).to.equal(0);
    })
  });
});
