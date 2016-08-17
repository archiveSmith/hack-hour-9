/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
//base case is when power = 0 return 1 
if(power === 0){
	return 1; 
}

//power is base * multiplication(base)
return base * pow(base, power - 1);
//2 x power(2, 2)
// 2 x power(2, 1)
//  2 x power(2, 0) = 1 

}

module.exports = pow;
