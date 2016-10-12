const expect = require('chai').expect;
const getAllProducts = require('./get-all-products');

function ascending(a, b) { return a - b; }

describe('getAllProducts', () => {
  it('should return all of the products', () => {
    expect(getAllProducts([1, 7, 3, 4]))
      .to.deep.equal([84, 12, 28, 21])
  })

  it('should work for arrays that have 0 in them', () => {
    expect(getAllProducts([0, 1, 1, 1]))
      .to.deep.equal([1, 0, 0, 0]);
  })

  it('should work for arrays that have multiple 0s', () => {
    expect(getAllProducts([0, 1, 0, 1]))
      .to.deep.equal([0, 0, 0, 0]);
  })

  it('should return [0] if the array is empty', () => {
    expect(getAllProducts([])).to.deep.equal([0])
  })

  it('should return the same array if the array is length 1', () => {
    expect(getAllProducts([4])).to.deep.equal([4])
  })
})
