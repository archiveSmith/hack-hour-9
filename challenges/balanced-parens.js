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
    let indO = []
    let indC = []

    for (var i = 0; i < input.length; i++) {
        if (input[i] === "(") {
            indO.push(i);
        } else if (input[i] === ")") {
            indC.push(i);
        }
    }

    if (indO.length !== indC.length) {
        return false;
    }

    if (indO[indo.length - 1] > indC[0]) {
        return false
    }

    return true
}

module.exports = balancedParens;
