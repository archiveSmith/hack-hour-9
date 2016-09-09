const expect = require('chai').expect;
const numToWords = require('./num-to-words');

describe('numToWords', function() {
  describe('normal functionality', function() {
    it('should handle the 1s place correctly', function() {
      expect(numToWords(0)).to.equal('Zero');
      expect(numToWords(9)).to.equal('Nine');
      expect(numToWords(3)).to.equal('Three');
    });

    it('should handle the 10s place correctly when input is less than 20', function() {
      expect(numToWords(10)).to.equal('Ten');
      expect(numToWords(11)).to.equal('Eleven');
      expect(numToWords(13)).to.equal('Thirteen');
    });

    it('should handle the 10s place correctly when the input is more than 20', function() {
      expect(numToWords(29)).to.equal('TwentyNine');
      expect(numToWords(70)).to.equal('Seventy');
      expect(numToWords(76)).to.equal('SeventySix');
    });

    it('should handle the 100s place correctly', function() {
      expect(numToWords(100)).to.equal('OneHundred');
      expect(numToWords(123)).to.equal('OneHundredTwentyThree');
      expect(numToWords(395)).to.equal('ThreeHundredNinetyFive');
    });

    it('should handle numbers in the 1000s', function() {
      expect(numToWords(1000)).to.equal('OneThousand');
      expect(numToWords(3976)).to.equal('ThreeThousandNineHundredSeventySix');
      expect(numToWords(17500)).to.equal('SeventeenThousandFiveHundred');
    });

    it('should handle larger numbers', function() {
      expect(numToWords(1756500)).to.equal('OneMillionSevenHundredFiftySixThousandFiveHundred');
    })
  });
});
