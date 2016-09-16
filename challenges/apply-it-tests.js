const expect = require('chai').expect;
const applyIt = require('./apply-it');

const describePerson = function(name, age, location) {
  return name + " is " + age + " and he lives in " + location;
};

const smartDescribe = function(name, age) {
  if(!age) return "We don't know how old " + name + " is!";

  return name + " is " + age + " years old!";
};

describe('applyIt', function() {
  describe('normal functionality', function() {
    it('should return a function', function() {
      expect(applyIt(describePerson, [])).to.be.a('function');
    });

    it('should return a function that uses the arguments from the array', function() {
      const func = applyIt(describePerson, ['Daniel', 29, 'Los Angeles']);
      expect(func()).to.equal('Daniel is 29 and he lives in Los Angeles');
    });

    it('should replace any arguments not provided in the array with undefned', function() {
      const func = applyIt(smartDescribe, ['Daniel']);
      expect(func()).to.equal("We don't know how old Daniel is!");
    });
  });

  describe('edge case handling', function() {
    it('should return undefined when the first argument is not a function', function() {
      expect(applyIt('hello', [])).to.be.undefined;
    });

    it('should return undefined when the second argument is not an array', function() {
      expect(applyIt(function() {return true}, 'hello')).to.be.undefined;
    });
  });
});
