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

function balancedParens(input) {
  const filtered = input.replace(/[^\{\}\(\)\[\]]/g, '');
  const cache = [];

  for (let i = 0; i < filtered.length; i++) {
    const char = filtered[i];
    const reversed =  char === ')' ? '('
                  : char === '}' ? '{'
                  : char === ']' ? '['
                  : null;

    if (reversed === cache[cache.length - 1]) cache.pop();
    else cache.push(char);
  }

  return !cache.length;
}

module.exports = balancedParens;


// Original Solution (doesn't pass all cases)

// function balancedParens(input){
//   let bracketString = input.replace(/[^\(\)]/g, '');
//   if (bracketString.length % 2 !== 0 || bracketString[0] !== '(' || bracketString[bracketString.length - 1] !== ')') return false;

//   if (bracketString === '()') return true;

//   let innerString = bracketString.slice(1, bracketString.length - 1)
//   let leftParenCountOnLeft = 0;
//   let rightParenCountOnLeft = 0;

//   let midpoint = innerString.length / 2;
//   for (let i = 0; i < midpoint; i++) {
//     if (innerString[i] === '(') leftParenCountOnLeft++;
//     if (innerString[i] === ')') rightParenCountOnLeft++;
//   }

//   return leftParenCountOnLeft > rightParenCountOnLeft;
