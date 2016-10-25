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
  const conversion = {
    // methods to convert card values into a value that can be compared with other values for same match type but no overlap with better hands.
    one: (matchcard) => { matchcard; },
    two: (matchcard) => { (matchcard * 2) + 14; },
    twopair: (matchcard1, matchcard2) => { (matchcard1 * 2) + (matchcard2 * 2) + 36; }, 
    three: (matchcard) => { (matchcard * 3) + 92; },
    straight: (args) => { args.reduce( (prev, curr) => prev + curr ) + 134;},
    fullHouse: (matchcard3, matchcard2) => {(matchcard3 * 3) + (matchcard2 * 2) + 194; },
    four: (matchcard) => { matchcard * 4 + 262} 
  }
  // figure out what matches each hand has and which is the best one.
  let player1Max = Math.max(...hand1);
  let player2Max = Math.max(...hand2);

  const player1Hand = {};
  const player2Hand = {};
  //sort the cards
  hand1 = hand1.sort(function(a,b){
    return b-a;
  });
   hand2 = hand2.sort(function(a,b){
    return b-a;
  });
  //figure out if it's a straight
  if(hand1.reduce(function(prev,curr) {
    return Math.max(prev, prev - curr);
  }, 1) === 1){
    console.log("it's a straight");
  }
  
  // count how many of each card there are.
  for(let i = 0; i < 5; i++){
    if(!player1Hand[hand1[i]]){
      player1Hand[hand1[i]] = 1;
    }
    else {
      player1Hand[hand1[i]]++;
    }
    if(!player2Hand[hand2[i]]){
      player2Hand[hand2[i]] = 1;
    }
    else {
      player2Hand[hand2[i]]++;
    }
  }
  console.log(player1Hand);
  console.log(player2Hand);

  if(player1Max > player2Max) {
    return "Player 1 wins!";
  }
  else if(player2Max > player1Max) {
    return "Player 2 wins!";
  }
  else if(player1Max === player2Max){
    //draw logic whoever invented poker is evil
  }
}

// module.exports = poker;

console.log(poker([3,5,5,5,2], [4,6,7,8,8]))