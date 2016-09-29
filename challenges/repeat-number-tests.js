const expect = require('chai').expect;
const repeatNumbers = require('./repeat-number');

describe('repeatNumbers', () => {
  describe('normal functionality', () => {
    it('should correctly identify the number that is repeated', () => {
      expect(repeatNumbers([1, 2, 3, 3])).to.equal(3);
      expect(repeatNumbers([3, 2, 1, 3])).to.equal(3);
    })
  })
})
