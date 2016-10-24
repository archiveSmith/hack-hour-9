/*Build a function that takes in two arrays of five elements, with each
* array representing a player's hand and each element
* representing a card from a standard deck of cards:
* 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
*
* The function should return either the string "Player 1 wins", "Player 2 wins",
* or "Draw"
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

function poker(hand1, hand2) {
  return whatUhave(hand1);
  function whatUhave(hand) {
    let pair = false;
    let twoPair = false;
    let threeOfAKind = 0;
    let fourOfAKind = 0;

    for (let i = 0; i < hand.length - 1; i++) {
      let numOfCard = 0;
      for (let j = i + 1; j < hand.length; j++) {
        if (hand[i] === hand[j]) {
          pair === false ? pair = true : twoPair = true;
          numOfCard === 0 ? numOfCard += 2 : numOfCard += 1;
        }
        if (pair) {
          console.log('found a pair', hand[i], hand[j]);
        }
      }
      if (numOfCard === 3) {
        pair = false;
        threeOfAKind = true;
      } else if (numOfCard === 4) {
        pair = false;
        fourOfAKind = true;
      } else if (twoPair === true) {
        pair = false;
      }
    }
    if (fourOfAKind) {
      return 'fourOfAKind';
    } else if (threeOfAKind && pair) {
      return 'fullHouse';
    } else if (threeOfAKind) {
      return 'threeOfAKind';
    } else if (twoPair) {
      return 'twoPair';
    } else if (pair) {
      return 'pair';
    }
  }
}

console.log(poker([4,3,3,3,4]))

module.exports = poker;
