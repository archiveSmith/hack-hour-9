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

function isStraight(array) {
      let sorted = array.sort(function(a, b){
        return a - b; 
      });
      for(let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] + 1 !== sorted[i + 1]) {
          return false;
        }
      }
      return  true;
}
function isFullHouse(array) {
  return array.includes('3K') && array.includes('1P') ? true : false;
}

function poker(hand1, hand2) {
let player1Count = 0;
let player2Count = 0;
let max1 = 0;
let max2 = 0;
let full1 = 0;
let full2 = 0;
let pair1 = 0;
let pair2 = 0;
let player1 = {};
let player2 = {};
let hand1Strong = [];
let hand2Strong = [];

hand1.forEach((element) => {
  player1[element] ? player1[element] += 1 : player1[element] = 1;
});

hand2.forEach( (element) => {
  player2[element] ? player2[element] += 1 : player2[element] = 1;
});

  for(let prop in player1) {
    if (player1[prop] === 4) {
      if (prop > max1) {
          max1 = +prop;
      }
      hand1Strong.push(+prop, '4K');
    } else if (player1[prop] === 3) {
      if (prop > max1) {
          max1 = +prop;
      }
      full1 = +prop;
      hand1Strong.push(+prop, '3K');
    } else if (player1[prop] === 2) {
      player1Count++;
      if (prop > max1) {
          max1 = +prop;
      }
      pair1 = +prop;
      hand1Strong.push(+prop, '1P');
    }
  }

  for (let prop in player2) {
    if (player2[prop] === 4) {
      if (prop > max2) {
        max2 = +prop;
      }
      hand2Strong.push(+prop, '4K');
    } else if (player2[prop] === 3) {
      if (prop > max2) {
        max2 = +prop;
      }
      full2 = +prop;
      hand2Strong.push(+prop, '3K');
    } else if (player2[prop] === 2) {
      player2Count += 1;
      if (prop > max2) {
        max2 = +prop;
      }
      pair2 = +prop;
      hand2Strong.push(+prop, '1P');
    }
  }

  //change from 1 Pair to 2 Pairs
  if (player2Count === 2) {
    hand2Strong[1] = '2P';
    hand2Strong[3] = '2P';
  }
  if (player1Count === 2) {
    hand1Strong[1] = '2P';
    hand1Strong[3] = '2P';
  }
  
  // Both hands are Straights
  if(isStraight(hand1) && isStraight(hand2)) {
    max1 = Math.max.apply(null, hand1);
    max2 = Math.max.apply(null, hand2);
    if(max1 > max2) {
      return 'Player 1 wins';
    } else if(max1 === max2) {
      return 'Draw';
    } else {
      return 'Player 2 wins';
    }
  }
  //One of the hands are straights 
  if(isStraight(hand1)) {
    max1 = Math.max.apply(null, hand1);
    hand1Strong.push(Math.max.apply(null, hand1), 'Straight');
  }
  if(isStraight(hand2)) {
    max2 = Math.max.apply(null, hand2);
    hand2Strong.push(Math.max.apply(null, hand2), 'Straight');
  }
  
  //Account for High cards only in one hand or another
  if(hand1Strong.length === 0 || hand2Strong.length === 0) {
    if(hand1Strong.length === 0 && hand2Strong.length > 0) return 'Player 2 wins';
    if(hand2Strong.length === 0 && hand1Strong.length > 0) return 'Player 1 wins';
    max1 = Math.max.apply(null, hand1);
    max2 = Math.max.apply(null, hand2);
    if(max1 === max2) return 'Draw';
    return max1 > max2 ? 'Player 1 wins' : 'Player 2 wins';
  }
  
  //check if both players contain full houses
  if(isFullHouse(hand1Strong) && isFullHouse(hand2Strong)) {
    if(full1 > full2) {
      return "Player 1 wins";
    } else if(full1 === full2) {
      if(pair1 > pair2) {
        return "Player 1 wins";
      } else {
        return "Player 2 wins";
      }
    } else {
      return "Player 2 wins";
    }
  }
  
  //check if only one has Full house
  if(isFullHouse(hand1Strong)) {
    return hand2Strong.includes("4K") ? "Player 2 wins" : "Player 1 wins";
  }
  if(isFullHouse(hand2Strong)) {
    return hand1Strong.includes("4K") ? "Player 1 wins" : "Player 2 wins";
  }
  
  for(let k = 0; k < hand1Strong.length; k++) {
    if(hand1Strong[k] === '1P') {
      player1Count += 50;
    } else if(hand1Strong[k] === '2P') {
      player1Count += 100;
    } else if(hand1Strong[k] === '3K') {
      player1Count += 150;
    } else if(hand1Strong[k] === 'Straight') {
      player1Count += 200;
    } else if(hand1Strong[k] === '4K') {
      player1Count += 250;
    } else {
      player1Count += hand1Strong[k];
    }
  }
  for(let m = 0; m < hand2Strong.length; m++) {
    if(hand2Strong[m] === '1P') {
      player2Count += 50;
    } else if(hand2Strong[m] === '2P') {
      player2Count += 100;
    } else if(hand2Strong[m] === '3K') {
      player2Count += 150;
    } else if(hand2Strong[m] === 'Straight') {
      player2Count += 200;
    } else if(hand2Strong[m] === '4K') {
      player2Count += 250;
    } else {
      player2Count += hand2Strong[m];
    }
  }
  
  if (player1Count > player2Count) {
    return 'Player 1 wins';
  } else if (player1Count === player2Count) {
    return 'Draw';
  } else {
    return 'Player 2 wins';
  }
  
}

module.exports = poker;
