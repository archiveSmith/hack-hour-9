// Write a function that takes a number as an argument and returns its english word representation as a string.
//Answers should be in upper camel case (a.k.a.Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {
  const ones = { 0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine' };
  const teens = { 11: 'Eleven', 12: 'Twelve', 13: 'Thirteen', 14: 'Fourteen', 15: 'Fifteen', 16: 'Sixteen', 17: 'Seventeen', 18: 'Eightteen', 19: 'Nineteen' };
  const tens = { 2: 'Twenty', 3: 'Thirty', 4: 'Forty', 5: 'Fifty', 6: 'Sixty', 7: 'Seventy', 8: 'Eighty', 9: 'Ninty' };
  const base = { 1: 'Hundred', 2: 'Thousand', 3: 'Million', 4: 'Billion', 5: 'Trillion', 6: 'Quadrillion' };
  
  const numString = num.toString();

  if (numString.length === 1) {
    return ones[num];
  }

  if (numString.length === 2) {
    if (numString[1] === 0) {
      return tens[numString[0]];
    } else if (numString[0] === 1) {
      return teens[num];
    } else {
      return tens[numString[0]] + ones[numString[1]];
    }
  }

  if (numString.length > 2) {
    
  }
}

numToWords(345)

module.exports = numToWords;
