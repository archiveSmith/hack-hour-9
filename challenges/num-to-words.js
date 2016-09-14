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
  if (num === 0) return 'Zero';

  let ones = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  let teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixten', 'Seveteen', 'Eighteen', 'Nineteen'];
  let tens = ['Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  let theo = ['Hundred', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];

  num = num.toString(); 
  // console.log(num.toString())

  num = num.replace(/[\, ]/g, '');
 
  let x = num.indexOf('.');
  console.log(x)
  if (x == -1) x = num.length; 
  if (x > 15) return 'too big'; 
  let n = num.split(''); 
  console.log(x)
  console.log(n)
  let str = ''; 
  let sk = 0; 
  for (var i=0; i < x; i++){
    if((x-i)%3==2) {
      if (n[i] == '1') {
        str += tn[Number(n[i+1])] + ' '; 
        i++; 
        sk=1;
      } else if (n[i]!=0) {
        str += tw[n[i]-2] + ' ';
        sk=1;
      }
    } else if (n[i]!=0) {
      str += dg[n[i]] +' '; 
      if ((x-i)%3==0) str += 'hundred ';
      sk=1;
    }
    if ((x-i)%3==1) {
      if (sk) str += th[(x-i-1)/3] + ' ';
      sk=0;
    }
  }
  if (x != s.length)
  {
      var y = s.length; 
      str += 'point '; 
      for (var i=x+1; i<y; i++) str += dg[n[i]] +' ';
  }
    return str.replace(/\s+/g,' ');
}
  
}
console.log(numToWords(2999));
module.exports = numToWords;
