const expect = require('chai').expect;
const findInOrderedSet = require('./find-in-ordered-set');
describe('findInOrderedSet', () => {
  describe('normal functionality', () => {
    it('should return true if the number is in the ordered set', () => {
      const nums = [1, 4, 6, 7, 9, 17, 45];

      for (let i = 0; i < nums.length; i++) {
        expect(findInOrderedSet(nums, nums[i])).to.be.true;
      }
    });

    it('should return false if the number is not in the ordered set', () => {
      const nums = [1, 4, 6, 7, 9, 17, 45];
      const notInNums = [2, 5, 8, 10, 18, 100, 102];

      for (let i = 0; i < notInNums.length; i++) {
        expect(findInOrderedSet(nums, notInNums[i])).to.be.false;
      }
    });

    it('should work for odd length arrays', () => {
      const nums = [1, 3, 4, 5, 6];

      expect(findInOrderedSet(nums, 1)).to.be.true;
      expect(findInOrderedSet(nums, 6)).to.be.true;
      expect(findInOrderedSet(nums, 2)).to.be.false;
    });

    it('should work for even length arrays', () => {
      const nums = [1, 3, 4, 5, 6, 8];

      expect(findInOrderedSet(nums, 1)).to.be.true;
      expect(findInOrderedSet(nums, 8)).to.be.true;
      expect(findInOrderedSet(nums, 11)).to.be.false;
    });
  });

  describe('edge case handling', () => {
    it('should return false if the array is empty', () => {

    });

    it('should return false if a null value is given', () => {

    });

    it('should return false if undefined is given', () => {

    })
  })
});
