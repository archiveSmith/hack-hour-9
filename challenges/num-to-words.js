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
  const numString = num.toString();
  const length = numstring.length;
  let wordString;

  for (let i = length - 1; i >= 0; i--) {    
    const digit = Number(numString[i]);
    const place = length - i;

    if () {}

    wordString += convertNum(digit, place);
  }

  function convertNum(number, place) {
    let word;
    if (length === 2 && num[0] === '1') {
      switch (num) {
        case 11: word = 'Eleven'; break;
        case 12: word = 'Twelve'; break;
        case 13: word = 'Thirten'; break;
        case 14: word = 'Fourteen'; break;
        case 15: word = 'Fifteen'; break;
        case 16: word = 'Sixteen'; break;
        case 17: word = 'Seventeen'; break;
        case 18: word = 'Eighteen'; break;
        case 19: word = 'Nineteen'; break;
      }
      return wordString;
    }

    switch (num) {
      case 0: word = 'Zero'; break;
      case 1: word = 'One'; break;
      case 2: word = 'Two'; break;
      case 3: word = 'Three'; break;
      case 4: word = 'Four'; break;
      case 5: word = 'Five'; break;
      case 6: word = 'Six'; break;
      case 7: word = 'Seven'; break;
      case 8: word = 'Eight'; break;
      case 9: word = 'Nine'; break;
    }

    switch (num) {
      case 2: word = 'Twenty'; break;
      case 3: word = 'Thirty'; break;
      case 4: word = 'Fourty'; break;
      case 5: word = 'Fifty'; break;
      case 6: word = 'Sixty'; break;
      case 7: word = 'Seventy'; break;
      case 8: word = 'Eighty'; break;
      case 9: word = 'Ninety'; break;
    }

    switch (place) {
      case 0: word += 'Hundred'; break;
      case 0: word +='Thousand'; break;
      case 0: word +='Million'; break;
      case 0: word +='Billion'; break;
      case 0: word +='Trillion'; break;
      case 0: word +='Quadrillion'; break;
    }
    return word;
  } // End of convertNum

  return wordString;
} // End of numToWords

module.exports = numToWords;
