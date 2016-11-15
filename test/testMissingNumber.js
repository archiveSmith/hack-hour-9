assert = chai.assert;
expect = chai.expect;

describe('MissingNumber', function () {
  it('should find a missing number of 4', function () {
    // Test implementation goes here
    let arr = [2,3,1,5]
    let result = missingNum(arr)
    assert.equal(result, 4)
  });
    it('should not find a missing number of 9', function () {
    // Test implementation goes here
    let arr = [2,3,1,5,6,7,8,9,10]
    let result = missingNum(arr)
    assert.notEqual(result, 9)
  });
});
