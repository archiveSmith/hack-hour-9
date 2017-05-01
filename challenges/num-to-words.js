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
	if (num < 0 || !Number.isInteger(num)) {
		return undefined;
	}

//convert to array of num strings
let numArr = num.toString().split('');

//update what place value we are at
let placeVal = numArr.length;

let result = '';

//2nd place value also applies to 10  10,000  10,000,000.. etc.
//these have places 2, 5, 8, 11
//these follow the pattern of x%3 = 2 
let nineteen = {'1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five'};

let tensPlace = {'2': 'twenty', '3': 'thirty', '4': 'forty', '5':'fifty', '6':'sixty', '7':'seventy', '8':'eighty', '9':'ninety'};

let placeSuffix = { '1':'', '3': 'hundred', '4': 'thousand'};

//iterate thru the array and parse depending on the Iterator
	for (let i = 0; i < numArr.length; i++) {
		if (placeVal === 0) break;
		
		//special case for 10s place
		if (placeVal%3 === 2) {
			
		} else { // the placeVal tells us what to append
			
			
			
		}
		
		placeVal--;	
	}

}

module.exports = numToWords;
