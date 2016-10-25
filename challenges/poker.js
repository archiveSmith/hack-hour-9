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

function findHand(cards) {
  const hand = {};
  let output = {};
  for (let i = 0; i < cards.length; ++i) {
    if (!hand[cards[i]]) {
      hand[cards[i]] = 1;
    } else {
      hand[cards[i]]++;
    }
  }
  const handArr = Object.keys(hand).sort((a, b) => a - b);
  if (handArr.length === 3) {
    for (let i = 0; i < handArr.length; ++i) {
      if (hand[handArr[i]] === 3) {
        output.kind = 4;
        break;
      } else if (hand[handArr[i]] === 2) {
        output.kind = 3;
        break;
      }
      output.hand = handArr;
    }
  } else if (handArr.length === 2) {
    for (let i = 0; i < handArr.length; ++i) {
      if (hand[handArr[i]] === 4) {
        output.kind = 7;
      }
      if (hand[handArr[i]] === 3) {
        output.kind = 6;
      }
      output.hand = handArr;
    }
  } else if (handArr.length === 5) {
    const check = handArr.sort((a, b) => a - b);
    const striaght = check.every((num, i) => i === check.length - 1 || num < check[i + 1])
    if (striaght) {
      output.kind = 5;
      output.hand = handArr;
    }
  } else if (handArr.length === 4) {
    output.kind = 2;
    output.hand = handArr;
  }
  return output;
}

function poker(hand1, hand2) {
  const Player1 = findHand(hand1);
  const Player2 = findHand(hand2);
  if (Player1.kind > Player2.kind) {
    return 'Player 1 wins';
  }
  return 'Player 2 wins';
}


console.log(poker([4, 6, 7, 8, 8], [3, 5, 5, 5, 2]));
module.exports = poker;
