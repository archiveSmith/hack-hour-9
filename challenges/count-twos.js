// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483


function countTwos(num) {
  let numS = num.toString();
  let numdigits = numS.length;
  let numarr = numS.split("").reverse();
  let collector = 0;
  
  for(let i = 0; i < numdigits; i++){
  	if(i === 0 && Number(numarr[i]) >= 2){
  		collector += 1;
  	}
  	if(Number(numarr[i])> 2 && i > 0){
  		//all the stuff from the starts-with-2, plus multiplied includes place (i.e. for each 100 there are 20, times 4 for 400, plus all the 200's)
  		collector += Math.pow(10, i) + Math.pow(10, i-1)*Number(numarr[i])*(i);
  	}
  	if(Number(numarr[i]) === 2 && i > 0){
  		let twos = numS.slice(numdigits-i);
  		collector += Number(twos)+1;
  		//add all the stuff below the 2's (for ex for 200, add 1 for the 200's spot, then all the stuff from 0-199)
  		collector += Math.pow(10, i-1)*i + 1;
  	}
  	if(Number(numarr[i]) === 1 && i > 0){
  		collector += Math.pow(10, i-1)*i;
  	}
  }
  
  return collector;
}

module.exports = countTwos;