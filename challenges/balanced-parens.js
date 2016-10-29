/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

 function balancedParens(input){
   let reGlobal = /\(.*\)|\{.*\}|\[.*\]/gi;
   let rePar = /\(.*\)/gi;
   let reCur = /\{.*\}/gi;
   let reBra = /\[.*\]/gi;
   let globalResult = reGlobal.exec(input);
   let reParResult = rePar.exec(input);
   let reCurResult = reCur.exec(input);
   let reBraResult = reBra.exec(input);
   // console.log(globalResult, reParResult);
   console.log(reParResult);

   if (globalResult !== null) {
   	if (reParResult[0] !== null) {
   		return true;
   	} else if (reCurResult[0] !== null) {
   		return true;
   	} else if (reBraResult[0] !== null) {
   		return true;
   	}
   }
   else {
   	return false;
   }
   return false;


 }

module.exports = balancedParens;
