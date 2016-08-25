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
  let char = '';
  let openBracket = ['(','[','{'];
  let closeBracket = [')', ']', '}'];
  let holder = [];

  for(let i=0; i< input.length; i++){
    char = input[i];
    if(openBracket.indexOf(char) > -1){
      holder.push(char);
    }else if (closeBracket.indexOf(char) > -1) {

     let match = openBracket[closeBracket.indexOf(char)];
      if (holder.length === 0 || (holder.pop() !== match)) {
        return false;
      }else {
       // do nothing cause its not a bracket
      }
    }
  }
  return (holder.length === 0);
}

module.exports = balancedParens;
