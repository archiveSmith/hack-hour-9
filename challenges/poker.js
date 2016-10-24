/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins", or "Draw"
*  based on the two player's hands:
*
* 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card.
* (keeping in mind how cards out-rank eachother and possible draws)
*
* Start by hard-coding the array/hand inputs, but if there is time also
* create a deck of cards function that creates the two arrays for you,
* keeping in mind that there are only 4 of each card in a deck (52 total).
*
* BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
*
* Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
*/


function highCard(hand) {
  return [true, hand.sort((a, b) => b - a), 0];
}

function pair(hand) {
  let counts = {},
    hasPair = false,
    val = 0;
  for (let card of hand) {
    counts[card] = counts[card] ? counts[card] + 1 : 1;
    if (counts[card] === 2) {
      hasPair = true
      val = card;
      break;
    }
  }
  let left = hand.filter(card => card !== val);
  return [hasPair, [val, Math.max(...left)], 1]
}
function twoPair(hand) {
  let hasTwoPair = false,
    counts = {};
  for (let card of hand) {
    counts[card] = counts[card] ? counts[card] + 1 : 1;
    if (counts[card] === 2) {
      if (counts.pair) {
        counts.pair.push(card);
        hasTwoPair = true;
      } else {
        counts.pair = [card];
      }
    }
  }
  counts.highCard = hand.filter(card => !counts.pair.includes(card))[0];
  return [hasTwoPair, [Math.max(...counts.pair), counts.highCard], 2]
}
function threeOfAKind(hand) {
  let counts = {},
    hasTrio = false,
    val = 0;
  for (let card of hand) {
    counts[card] = counts[card] ? counts[card] + 1 : 1;
    if (counts[card] === 3) {
      hasTrio = true
      val = card;
      break;
    }
  }
  let left = hand.filter(card => card !== val).sort().reverse()
  return [hasTrio, [val, ...left], 3]
}
function straight(hand) {
  let start = Math.min(...hand),
    hasStraight = false;
  for (let i = 0; i < 5; i++) {
    if (!hand.includes(start + i)) break;
    if (i === i + 4) hasStraight = true;
  }
  return [hasStraight, [Math.max(...hand), 0], 4]
}
function fullHouse(hand) {
  let counts = {},
    hasTrio = false,
    hasPair = false;
  for (let card of hand) {
    counts[card] = counts[card] ? counts[card] + 1 : 1;
    if (counts[card] === 3) {
      counts.trio = card;
      hasTrio = true;
    }
  }
  let left = hand.filter(card => card !== counts.trio);
  if ((left[0] === left[1]) && left[0] !== counts.trio && left[1] !== counts.trio) hasPair = true;
  return ([hasPair && hasTrio, [counts.trio, Math.max(...left)], 5])
}
function fourOfAKind(hand) {
  let counts = {},
    hasQuad = false;
  for (let card of hand) {
    counts[card] = counts[card] ? counts[card] + 1 : 1;
    if (counts[card] === 4) {
      counts.quad = card;
      hasQuad = true;
    }
  }
  let left = hand.filter(card => card !== counts.quad);
  return [hasQuad && left !== counts.quad, [counts.quad, left[0]], 6];

}

function poker(hand1, hand2) {
  const hands = [fourOfAKind, fullHouse, straight, threeOfAKind, twoPair, pair, highCard]
  for (let func of hands) {
    let res1 = func(hand1);
    let res2 = func(hand2);
    if (res1[0] && !res2[0]) return "Player 1 wins";
    if (res2[0] && !res1[0]) return "Player 2 wins";
    if (res1[0] && res2[0]) {
      for (let i = 0; i < res1[1].length; i++) {
        if (res1[1][i] > res2[1][i]) return "Player 1 wins";
        if (res2[1][i] > res1[1][i]) return "Player 2 wins";
      }
    }
  }
}
module.exports = poker;
