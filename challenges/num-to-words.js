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
	let words = {
		0: 'Zero',
		1: 'One',
		2: 'Two',
		3: 'Three',
		4: 'Four', 
		5: 'Five',
		6: 'Six',
		7: 'Seven',
		8: 'Eight',
		9: 'Nine',
		10: 'Ten',
		11: 'Eleven',
		12: 'Twelve',
		13: 'Thirteen',
		14: 'Fourteen',
		15: 'Fifteen',
		16: 'Sixteen',
		17: 'Seventeen',
		18: 'Eighteen',
		19: 'Ninteen',
		20: 'Twenty',
		30: 'Thirty',
		40: 'Fourty',
		50: 'Fifty',
		60: 'Sixty',
		70: 'Seventy',
		80: 'Eighty',
		90: 'Ninty',
	}
	
	let bigs = ['Sextillion', 'Hundred', 'Quntillion', 'Hundred', 'Quadrillion', 'Hundred', 'Trillion','Hundred','Billion','Hundred', 'Million','Hundred', 'Thousand','Hundred']

	// if (num < 20) {
	// 	return words[num]
	// }
	function parseTwo(num) {
		let ones = num % 10;
		let tens = num - ones;
		if (ones === 0) return words[tens]
		return words[tens] + words[ones];
	}
	let split = [];
	while (num > 0) {
		split.unshift(num % 100);
		num = Math.floor(num / 100);
		split.unshift(num % 10);
		num = Math.floor(num / 10)
	}

	while (split[0] === 0) {
		split.shift();
	}
	split = split.map((num) => {
		if (num > 20) return parseTwo(num);
		return words[num];
	})
	
	let result = "";
	let counter = 0;
	let splitLen = split.length;
	while(split.length > 0) {
		// if (split[0] === 0) {
			
		// }
		result = split.pop() + result;
		if (counter < splitLen - 1) {
			result = bigs.pop() + result;
		}
		counter++;
	}
	// result = result.replace(/Zero/, "")
	result = result.split('Zero')[0]
	return result;
}

module.exports = numToWords;
