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
'use strict';
function numToWords(num) {
  if (num === 0) return 'Zero';
  let below20 = ['', 'One', 'Two', 'Three',
    'Four', 'Five', 'Six', 'Seven',
    'Eight', 'Nine', 'Ten', 'Eleven',
    'Twelve', 'Thirteen', 'Fourteen',
    'Fifteen', 'Sixteen', 'Seventeen',
    'Eighteen', 'Nineteen'];
  let below100 = ['', '', 'Twenty', 'Thirty',
    'Fourty', 'Fifty', 'Sixty', 'Seventy',
    'Eighty', 'Ninety'];
  let greater = ['', 'Thousand', 'Million',
    'Billion', 'Trillion', 'Quadrillion'];
  let nums = [];
  let numString = num.toString();
  while (numString.length % 3 !== 0) {
    numString = '0' + numString;
  }
  for (let i = 0; i < numString.length; i += 3) {
    let toAdd = numString[i] + numString[i + 1] + numString[i + 2];
    nums.push(toAdd);
  }
  let finalString = '';
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums[i].length; j++) {
      if (j === 0 && nums[i][j] !== '0') {
        console.log(nums[i][j]);
        finalString += below20[nums[i][j]];
        finalString += 'Hundred';
      }
      if (j === 1 && nums[i][j] !== ['0']) {
        finalString += below100[nums[i][j]];
      }
      if (j === 2 && nums[i][j] !== ['0']) {
        finalString += below20[nums[i][j]];
      }
    }
    finalString += greater[nums.length - 1 - i];
  }
  return finalString;
}

console.log(numToWords(23456789));

module.exports = numToWords;
