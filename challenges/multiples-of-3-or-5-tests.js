

const expect = require('chai').expect;
const {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
  sumMultiples
} = require('./multiples-of-3-or-5')

describe('sumMultiplesXOrYBelowZ', () => {
  describe('normal behavior', () => {
    it('should calculate the correct sum', () => {
      expect(sumMultiplesXOrYBelowZ(3, 5, 10)).to.equal(23)
    })
  })
})

describe('sumMultiples', () => {
  it('should return the correct sum', () => {
    expect(sumMultiples(3, 10)).to.equal(18);
    expect(sumMultiples(5, 10)).to.equal(5);
  })
})
