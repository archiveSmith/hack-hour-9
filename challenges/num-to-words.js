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
	//numbers smaller than 20 are uniquely named, hard-code
	var under20 = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
	//tens over 20
	var tens = ['','',"Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
	var hundreds = "Hundred";
	var thousand = "Thousand";
	var million = "Million";
	var billion = "Billion";
	var trillion = "Trillion";
	var quadrillion = "Quadrillion";
	var stringnum = num.toString();
	var wordpieces = [];
	var stringpieces = [];
	//how many digits?
	var length = stringnum.length;
	//if more than 1 digit and under 20
	//make word slices
	
	
	
	
	//compare each chunk to under20, tens, hundreds
	
	// for (var i = stringnum.length-1; i >= 0; i--){
	// 	if (i===0){
	// 		return "need input";
	// 	}
	// 	if(i>0){
	// 		let piece = (stringnum.charAt(i-1) + stringnum.charAt(i))|| stringnum.charAt(i);
	// 		console.log(piece);
	// 		wordpieces.push(under20[Number(piece)]);
	// 	}
		
			
	}
	
}

numToWords(15)


module.exports = numToWords;
