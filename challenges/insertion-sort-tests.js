const expect = require('chai').expect;
const insertionSort = require('./insertion-sort');

describe('insertionSort', () => {
  describe('normal functionality', () => {
    it('should sort the array correctly', () => {
      expect(insertionSort([6, 5, 4, 3, 2, 1]))
        .to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('should not sort the array if the array is already sorted', () => {
      expect(insertionSort([1, 2, 3, 4, 5]))
        .to.deep.equal([1, 2, 3, 4, 5]);
    });
  });

  describe('edge case handling', () => {
    it('should return null if the input array is null', () => {
      expect(insertionSort(null)).to.be.null;
    });

    it('should return undefined if the input is undefined', () => {
      expect(insertionSort()).to.be.undefined;
    });

    it('should return an empty array if the input is empty', () => {
      expect(insertionSort([])).to.deep.equal([]);
    });

    it('should return the same array if the input has one element', () => {
      expect(insertionSort([3])).to.deep.equal([3]);
    });
  });
});
