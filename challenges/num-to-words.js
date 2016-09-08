// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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
const ONES_PLACE = ['', 'One', 'Two', 'Three', 'Four',
                    'Five', 'Six', 'Seven', 'Eight', 'Nine'];

const STRANGE_TENS = {
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen'
}

const REGULAR_TENS = {
  2: 'Twenty',
  3: 'Thirty',
  4: 'Forty',
  5: 'Fifty',
  6: 'Sixty',
  7: 'Seventy',
  8: 'Eighty',
  9: 'Ninety'
}

function numToWords(num) {
  if (num === 0) return 'Zero';

  if (num < 10) {
    return ONES_PLACE[num];
  } else if (num < 20) {
    return STRANGE_TENS[num];
  }

  const ones_place = num % 10;
  const tens_place = Math.floor(num / 10);

  return REGULAR_TENS[tens_place] + ONES_PLACE[ones_place];
}

function getSmallestDigits(numberOfDigits, num) {
  return num % (Math.pow(10, numberOfDigits - 1));
}

function truncateLastThreeDigits(num) {
  return Math.floor(num / 1000);
}

numToWords.getSmallestDigits = getSmallestDigits;

module.exports = numToWords;
