const expect = require('chai').expect;
const permPalin = require('./perm-palin');


describe('permPalin', function() {
  describe('normal functionality', function() {
    it('should correctly decide if a string has a permutation that is a palindrome', function() {
      expect(permPalin('abab')).to.be.true;
      expect(permPalin('cbaba')).to.be.true;
      expect(permPalin('cbac')).to.be.false;
      expect(permPalin('a')).to.be.true;
    });

    it('should handle upper case', function() {
      expect(permPalin('Abab')).to.be.true;
    })
  });

  describe('edge case handling', function() {
    it('should report true for empty string', function() {
      expect(permPalin('')).to.be.true;
    });
  });
});
