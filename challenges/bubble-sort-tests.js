const expect = require('chai').expect;
const bubbleSort = require('./bubble-sort');

describe('bubbleSort', function() {
  it('should sort the array', function() {
    expect(bubbleSort([5, 4, 3, 2, 1]))
      .to.deep.equal([1, 2, 3, 4, 5]);

    expect(bubbleSort([5, 3, 2, 4, 1]))
      .to.deep.equal([1, 2, 3, 4, 5]);
  })
})
