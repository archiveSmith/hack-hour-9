const expect = require('chai').expect;
const mergeArrays = require('./merge-array');

describe('mergeArrays', function() {
  describe('normal functionality', function() {
    it('should merge the two sorted arrays', function() {
      const arr1 = [3, 4, 6, 10, 11, 15, 21];
      const arr2 = [1, 5, 8, 12, 14, 19];

      expect(mergeArrays(Array.from(arr1), Array.from(arr2)))
        .to.deep.equal([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]);

        expect(mergeArrays(Array.from(arr2), Array.from(arr1)))
          .to.deep.equal([1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]);
    });

    it('should work correctly if the two arrays are of different lengths', function() {
      const arr1 = [1];
      const arr2 = [3, 5, 7, 8, 9];

      expect(mergeArrays(arr1, arr2))
        .to.deep.equal([1, 3, 5, 7, 8, 9]);
    });

    it('should work for large inputs', function() {
      const arr1 = [];
      const arr2 = [];
      const result = [];

      for (let i = 0; i < 10000; i++) {
        arr1.push(1);
        arr2.push(1);

        result.push(1);
        result.push(1);
      }

      expect(mergeArrays(arr1, arr2)).to.deep.equal(result);
    })
  });

  describe('edge case handling', function() {
    it('should return undefined if either array is null or undefined', function() {
      expect(mergeArrays(null, [1, 2, 3])).to.be.undefined;
      expect(mergeArrays(undefined, [1, 2, 3])).to.be.undefined;
      expect(mergeArrays([1, 2, 3], null)).to.be.undefined;
      expect(mergeArrays([1, 2, 3], undefined)).to.be.undefined;
    });

    it('should return undefined if either input is nt an array', function() {
      expect(mergeArrays(3, [1, 2, 3])).to.be.undefined;
      expect(mergeArrays([1, 2, 3], 3)).to.be.undefined;
    });

    it('should return the other array if one of them is empty', function() {
      expect(mergeArrays([], [1, 2, 3])).to.deep.equal([1, 2, 3]);
      expect(mergeArrays([1, 2, 3], [])).to.deep.equal([1, 2, 3]);
    });
  });
});
