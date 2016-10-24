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

function poker(hand1, hand2) {
  hand1.sort();
  hand2.sort();
  //compare four of a kind
  if (fourOfKind(hand1) || fourOfKind(hand2)) {
    if (!fourOfKind(hand2)) return "Player 1 wins";
    if (!fourOfKind(hand1)) return "Player 2 wins";
    if (fourOfKind(hand1) > fourOfKind(hand2)) {
      return fourOfKind(hand1)
    }
    if (fourOfKind(hand2)) {
      if (fourOfKind(hand2) > fourOfKind(hand1)) {
        return fourOfKind(hand2)
      }
    }
    return "Draw"
  }

  //compare fullHouse
  if (fullHouse(hand1) || fullHouse(hand2)) {
    if (!fullHouse(hand2)) return "Player 1 wins";
    if (!fullHouse(hand1)) return "Player 2 wins";
    if (fullHouse(hand1)[0] > fullHouse(hand2)[0]) {
      return "Player 1 wins";
    }
    if (fullHouse(hand2)[0] > fullHouse(hand1)[0]) {
      return "Player 2 wins";
    }
  }
  if (straight(hand1) || straight(hand2)) {
    if (!straight(hand2)) return "Player 1 wins";
    if (!straight(hand1)) return "Player 2 wins";
    if (straight(hand1) > straight(hand2)) {
      return "Player 1 wins";
    }
    if (straight(hand2) > straight(hand1)) {
      return "Player 2 wins";
    }
    if (straight(hand2) === straight(hand1)) {
      return "Draw";
    }
  }
  //three of a kind check
  if (threeOfKind(hand1) || threeOfKind(hand2)) {
    if (!threeOfKind(hand2)) return "Player 1 wins";
    if (!threeOfKind(hand1)) return "Player 2 wins";
    console.log(threeOfKind(hand1))
    console.log(threeOfKind(hand2))
    if (threeOfKind(hand1) > threeOfKind(hand2)) {
      return "Player 1 wins";
    }
    if (threeOfKind(hand2) > threeOfKind(hand1)) {
      return "Player 2 wins";
    }
    if (threeOfKind(hand2) === threeOfKind(hand1)) {
      return "Draw";
    }
  }

  if (twoPair(hand1) || twoPair(hand2)) {
    if (!twoPair(hand2)) return "Player 1 wins";
    if (!twoPair(hand1)) return "Player 2 wins";
    if (twoPair(hand1)[0] > twoPair(hand2)[0]) return "Player 1 wins";
    if (twoPair(hand1)[1] > twoPair(hand2)[0]) return "Player 2 wins";
    if (twoPair(hand1)[0] === twoPair(hand2)[0]) {
      if (twoPair(hand1)[1] === twoPair(hand2)[1]) {
        return "Draw"
      }
      if (twoPair(hand1)[1] > twoPair(hand2)[1]) {
        return "Player 1 wins";
      }
      if (twoPair(hand1)[1] < twoPair(hand2)[1]) {
        return "Player 2 wins";
      }
    }
  }

  //pair check
  if (pair(hand1) || pair(hand2)) {
    if (!pair(hand2)) return "Player 1 wins";
    if (!pair(hand1)) return "Player 2 wins";
    if (straight(hand1) > straight(hand2)) {
      return "Player 1 wins";
    }
    if (pair(hand2) > pair(hand1)) {
      return "Player 2 wins";
    }
    if (pair(hand2) === pair(hand1)) {
      return "Draw";
    }
  }
  //high card check
  return highCard(hand1, hand2)

}

function ofAKind(hand) {
  let numOfAKind = {};
  for (let i = 0; i < 5; i++) {
    if (hand[i] === hand[i - 1]) {
      if (!numOfAKind[hand[i]]) {
        numOfAKind[hand[i]] = 2;
      } else {
        numOfAKind[hand[i]]++;
      }
    }
  }
  return numOfAKind;
}

function pair(hand) {
  let kindArray = Object.keys(ofAKind(hand));
  if (kindArray.length === 1) {
    if (ofAKind(hand)[kindArray[0]] === 2) {
      return kindArray[0];
    }
  }
}

function straight(hand) {
  let straight = 1;

  for (let i = 0; i < 5; i++) {
    if (hand[i] - 1 === hand[i - 1]) {
      straight++
    }
  }
  if (straight === 5) {
    return hand[hand.length - 1]
  } else {
    return false;
  }
}

function highCard(hand1, hand2) {
  return hand1[4] > hand2[4] ? 'Player 1 wins' : 'Player 2 wins'
}

function twoPair(hand) {
  let kindArray = Object.keys(ofAKind(hand));
  if (kindArray.length > 1) {
    if (ofAKind(hand)[kindArray[0]] > 1 && ofAKind(hand)[kindArray[1]] > 1) {
      return kindArray
    }
  }
}

function threeOfKind(hand) {
  let kindArray = Object.keys(ofAKind(hand));
  if (ofAKind(hand)[kindArray[0]] > 2) {
    return kindArray[0];
  }
  if (ofAKind(hand)[kindArray[1]] > 2) {
    return kindArray[1];
  }
  return 0;
}

function fullHouse(hand) {
  let kindArray = Object.keys(ofAKind(hand));
  let houseArray = []
  if (kindArray.length > 1) {
    if (ofAKind(hand)[kindArray[0]] > 2) {
      houseArray.push(kindArray[0])
      if (ofAKind(hand)[kindArray[1]] > 1) {
        houseArray.push(kindArray[1])
      }
      return houseArray
    }
    if (ofAKind(hand)[kindArray[1]] > 2) {
      houseArray.push(kindArray[1])
      if (ofAKind(hand)[kindArray[0]] > 1) {
        houseArray.push(kindArray[0])
      }
      return houseArray;
    }
    return false;
  }
}

function fourOfKind(hand) {
  if (ofAKind(hand)[Object.keys(ofAKind(hand))[0]] === 4) {
    return Object.keys(ofAKind(hand))[0];
  }
}

module.exports = poker;
