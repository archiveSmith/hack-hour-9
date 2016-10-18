const expect = require('chai').expect;
const countStairs = require('./count-stairs')

describe('countStairs', function () {
  it('should return 0 if the input is 0', function () {
    expect(countStairs(0)).to.equal(1);
  })

  it('should return 1 if the input is 1', function () {
    expect(countStairs(1)).to.equal(1);
  })

  it('should count the number of ways otherwise', function () {
    expect(countStairs(2)).to.equal(2);
    expect(countStairs(3)).to.equal(3);
    expect(countStairs(4)).to.equal(5);
    expect(countStairs(5)).to.equal(8);
  })
})