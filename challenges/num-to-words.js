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

function numToWords(num) {
 const numWords = {
  0: "Zero",
  1: "One",
  2: "Two",
  3: "Three",
  4: "Four",
  5: "Five",
  6: "Six",
  7: "Seven",
  8: "Eight",
  9: "Nine",
  10: "Ten",
  11: "Eleven",
  12: "Twelve",
  13: "Thirteen",
  14: "Fourteen",
  15: "Fifthteen",
  16: "Sixteen",
  17: "Seventeen",
  18: "Eightteen",
  19: "Nineteen",
  20: "Twenty",
  30: "Thirty",
  40: "Fourty",
  50: "Fifty",
  60: "Sixty",
  70: "Seventy",
  80: "Eighty",
  90: "Ninety",
  100: "Hundred",
  1000: "Thousand",
  1000000: "Million",
  1000000000: "Billion",
  }
  function findPortion(int) {
    //for 2 -1 digit portions
    if (int < 20) {
      return numWords[int];
    } else {
      let numStr = int.toString(),
      first = numWords[Number(numStr[0]) * 10]
      return int % 10 === 0 ? first : first + numWords[Number(numStr[1])];
    }
  }  
  let str = '';
  if (num < 100) {
    return findPortion(num);
  }
  let numStr = num.toString();
  let counter = 3;
  for (let i = numStr.length - 3; i >= 0; i -= 3) {
    tempStr = Number(numStr[i]) != 0 ? numWords[numStr[i]] + numWords[100] + findPortion(parseInt(numStr.slice(i + 1, i + 3))) : findPortion(parseInt(numStr.slice(i + 1, i + 3)));
    if (numStr.length - i > 4) {
      tempStr += numWords[Math.pow(10, counter)];
    }
    str = tempStr + str;
  }
  return str;
}

module.exports = numToWords;
