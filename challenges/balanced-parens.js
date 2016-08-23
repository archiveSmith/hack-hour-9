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
   let leftSquare = 0;
   let rightSquare = 0;
   let leftEli = 0;
   let rightEli = 0;
   let leftCurly = 0;
   let rightCurly = 0;
   for (let i = 0; i < input.length; i++) {
     if (input[i] === '(') {
       leftEli += 1;
     }
     if (input[i] === ')') {
       rightEli += 1;
     }
     if (input[i] === '[') {
       leftSquare += 1;
     }
     if (input[i] === ']') {
       rightSquare += 1;
     }
     if (input[i] === '{') {
       leftCurly += 1;
     }
     if (input[i] === '}') {
       rightCurly += 1;
     }
   }
   if (rightSquare === leftSquare && rightEli === leftEli && rightCurly === leftCurly) {
     return true;
   }
   return false;
 }

module.exports = balancedParens;
