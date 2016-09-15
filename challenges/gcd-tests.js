const expect = require('chai').expect;
const gcd = require('./gcd');

describe('gcd', function() {
  describe('normal functionality', function() {
    it('should get the right answer', function() {
      expect(gcd(12, 10)).to.equal(2);
      expect(gcd(13, 10)).to.equal(1);
    });

    it('should handle big numbers', function() {
      expect(gcd(1000000000004, 1000000000002)).to.equal(2);
      expect(gcd(1000000000001, 500000)).to.equal(1);
    });
  });
});
