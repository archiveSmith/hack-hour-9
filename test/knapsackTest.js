assert = chai.assert;
expect = chai.expect;

describe('Test the testing setup', function () {
  it('should work with chai.asset and normal function', function () {
    // Test implementation goes here
    var arr = [];
    assert.equal(arr.length, 0)
  });
  it('should also work with chai.expect and arrow functions', () => {
    var arr = [];
    expect(arr.length).to.be.equal(0)    
  })
  it('should show the default message on error', () => {
     var arr = [];
    assert.equal(arr.length, 1)
  })
  it('should show the "CATS RULE" custom message on error', () => {
     var arr = [];
    assert.equal(arr.length, 1, "CATS RULE")
  })
});



describe('Testing knapsack.js', function () {
  let items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];

  it('should return vale 7 with weightAvailable of 3', function () {
    // Test implementation goes here
    let weightAvailable = 3;
    // solveKnapsack(items, weightAvailable)
    assert.equal(solveKnapsack(items, weightAvailable), 7)
  });
    it('should return vale 9 with weightAvailable of 5', function () {
    // Test implementation goes here
    let weightAvailable = 5;
    assert.equal(solveKnapsack(items, weightAvailable), 9)
  });


});