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
  const large = ['Thousand', 'Million', 'Billion', 'Trillion'];
  const tens = { 0: "", 1: "Ten", 2: "Twenty", 3: "Thirty", 4: "Fourty", 5: "Fifty", 6: "Sixty", 7: "Seventy", 8: "Eighty", 9: "Ninety" };
  const singles = { 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten", 12: "Twelve", 13: "Thirteen", 14: "Fourteen", 15: "Fifteen", 16: "Sixteen", 17: "Seventeen", 18: "Eighteen", 19: "Nineteen" };

  //break number in to array.
  let arr = (num).toString(10).split("").map(function(t) { return parseInt(t) }).reverse();
  // console.log(arr);

  let chunks = [];
  for (i = 0, chunkSize = 3; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }

  let orderedChunk = [];
  chunks.forEach((e) => {
    if (e.length === 1) {
      e = e.concat([0, 0])
    }
    if (e.length === 2) {
      e = e.concat([0])
    }
    orderedChunk.push(e.reverse());
  });
  console.log(orderedChunk);

  let output = [];
  for (var i = 0; i < orderedChunk.length; i++) {
    output.push(large[i])
    for (var j = 0; j < orderedChunk[i].length; j++) {
      if (j === 0 && orderedChunk[i] !== 0) {
        output.push(singles[orderedChunk[i][j]] + 'Hundred')
      }
      if (j === 1 && orderedChunk[i] !== 0 && (orderedChunk[i][j].toString().concat(orderedChunk[i][j + 1].toString())) > 19) {
        // console.log(true);
        // console.log((orderedChunk[i][j].toString().concat(orderedChunk[i][j + 1].toString())));
        output.push(tens[orderedChunk[i][j]])
      } else {
        // console.log
        output.push(singles[orderedChunk[i][j]])
      }
      // if (j === 2) {
      //   output.push(tens[orderedChunk[i][j]])
      // }
    }
  }

  return output;
}

module.exports = numToWords;