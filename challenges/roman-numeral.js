/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
  const anchors = [
    {value: 1, symbol: 'I', primary: true},
    {value: 5, symbol: 'V', primary: false},
    {value: 10, symbol: 'X', primary: true},
    {value: 50, symbol: 'L', primary: false},
    {value: 100, symbol: 'C', primary: true},
    {value: 500, symbol: 'D', primary: false},
    {value: 1000, symbol: 'M', primary: true}
  ]
  
  let result = '';
  let currentTotal = 0;
  
  const anchor = getAnchor(n, anchors);
  result += anchor.symbol;
  currentTotal += anchor.value;
  
  if (n < anchor.value) {
    const previousPrimaryAnchor = getPreviousPrimaryAnchor(anchor, anchors);
    result = previousPrimaryAnchor.symbol + result;
    currentTotal -= previousPrimaryAnchor.value;
  }
  
  while (currentTotal !== n) {
    let currentDifference = n - currentTotal
    let next = nextAnchorToAdd(currentDifference, anchors);
    
    result += next.symbol;
    currentTotal += next.value;
  }
  
  return result;
  // From there, iterate downward through the symbols and figure out how much of each we should add

}

// Get the middle anchor for the given number
function getAnchor(n, anchors) {
  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].value === n) {
      return anchors[i];
    } else if (anchors[i].value > n) {
      const interval = (anchors[i].primary ? 2 : 1);
      if (anchors[i].value - n <= anchors[i - interval].value) {
        return anchors[i];
      } else {
        return anchors[i - 1];
      }
    }
  }
}

function getPreviousPrimaryAnchor(anchor, anchors) {
  let index;
  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].value === anchor.value) {
      index = i;
      break;
    }
  }
  
  return anchor.primary ? index - 2 : index - 1;
}

function nextAnchorToAdd(n, anchors) {
  for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].value > n) {
      return anchors[i - 1];
    }
  }
}

module.exports = romanNumeral;
