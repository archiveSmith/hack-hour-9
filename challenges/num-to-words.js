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
	console.log(num);
	console.log(typeof num);
	
	console.log()
	
	numDigits = Math.floor(num % 10)
	numTens = Math.floor(num / 10) 
	numHundreds = Math.floor(num / 100)
	numThousands = Math.floor(num / 1000)
	console.log("numDigits", numDigits)
	console.log("numTens ", numTens)
	console.log("numHundreds ", numHundreds)
	console.log("numThousands ", numThousands)
	
	resultString = '';
	
	smallMatch= {0:"Zero", 1:"One", 2:"Two", 3:"Three", 4:"Four", 5:"Five",6:"Six", 7:"Seven", 8:"Eight", 9:"Nine", 10:"Ten", 11:"Eleven",12:"Twelve",13:"Thirteen",14:"Fourteen",15:"Fifteen",16:"Sixteen",17:"Seventeen",18:"Eighteen",19:"Nineteen"};
	
	console.log(smallMatch[num])
}

module.exports = numToWords;
