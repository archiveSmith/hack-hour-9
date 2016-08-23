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
  if(hasNoParens(input) || hasOneBalancedPairParens(input)) {
    return true;
  } else if (hasOneUnmatchedLeftParen(input) || hasOneUnmatchedRightParen(input)) {
    return false;
  }
  
  const topParens = findTopLevelParens(input);
  return topParens.every(parenPair => {
    return balancedParens(input.slice(parenPair.open + 1, parenPair.close));
  });
  
  
}

function hasNoParens(input) {
  if (input.indexOf('(') === -1 && input.indexOf(')') === -1) {
    return true;
  }
  
  return false;
}

function hasOneUnmatchedLeftParen(input) {
  return input.indexOf('(') !== -1 && input.indexOf(')') === -1
}

function hasOneUnmatchedRightParen(input) {
  return input.indexOf(')') !== -1 && input.indexOf('(') === -1
}

function hasOneBalancedPairParens(input) {
  const lefts = input.match(/\(/g);
  const rights = input.match(/\)/g);

  if (lefts && rights &&
      lefts.length === 1 &&
      rights.length === 1 &&
      input.indexOf('(') < input.indexOf(')')) {
    return true;
  }

  return false;
}

function findTopLevelParens(input) {
  const results = [];
  
  let openIndex = null;
  let closeIndex = null;
  let levelsDeep = 0;
  
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      if (levelsDeep === 0) {
        openIndex = i;
      }
      levelsDeep++;
    }
    else if (input[i] === ')') {
      if (levelsDeep === 1) {
        closeIndex = i;
      }
      levelsDeep--;
      
    }
    
    if (openIndex !== null && closeIndex !== null) {
      results.push({open: openIndex, close: closeIndex});
      openIndex = closeIndex = null;
    }
    
  }
  
  return results;
}

module.exports = balancedParens;
