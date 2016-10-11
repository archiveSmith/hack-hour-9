const expect = require('chai').expect;
const uniqueNumber = require('./unique-number')

describe('uniqueNumber', function() {
  describe('normal functionality', function() {
    it('should find the unique number', function() {
      expect(uniqueNumber([1, 2, 1, 3, 3])).to.equal(2);
      expect(uniqueNumber([1, 3, 2, 3, 1, 4, 4])).to.equal(2);
    })
  })
})
