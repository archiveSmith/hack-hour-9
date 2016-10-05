const expect = require('chai').expect;
const anagrams = require('./anagrams');

describe('anagrams', () => {
  describe('normal functionality', () => {
    it('should return all anagrams of a string', () => {
      expect(anagrams('abc').sort())
        .to.eql(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'].sort());
    });

    it('should contain no duplicates', () => {
      expect(anagrams('aba'))
        .to.eql(['aab', 'aba', 'baa']);
    });
  });
});
