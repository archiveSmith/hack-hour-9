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
  if (typeof input !== 'string'){
    return undefined
  }
  
  var counter = 0;
  var leftMoon = 0;
  var rightMoon = 0;
  var rightCurl = 0;
  var leftCurl = 0;

  for (var i = 0; i < input.length;i++){
    if (input[i] == ')'){
      leftMoon++;
    } else if(input[i] ==  '(' ){
      rightMoon++;
    } else if (input[i] == '{' ){
      rightCurl++;
    } else if(input[i] == '}'){
      leftCurl++;
    }
  }

  if(leftMoon === rightMoon && leftCurl === rightCurl){
    return true
  } else {
    return false;
  }
}

module.exports = balancedParens;
