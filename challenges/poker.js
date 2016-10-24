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
	let four = 6;
	let house = 5;
	let straight = 4;
	let three = 3;
	let pair = 1;
	let playerOne = 0;
	let playerTwo = 0;
	let playerOneStraight = 0;
	let playerTwoStraight = 0;
	let playerOneHigh;
	let playerTwoHigh;
	let winner;
	
	let playOneCount = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0};
	let playTwoCount = {2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0, 10: 0, 11: 0, 12: 0, 13: 0, 14: 0};
	
	for(let i = 0; i < hand1.length; i++) {
		playOneCount[hand1[i]]++;
		playTwoCount[hand2[i]]++;
	}
	
	for(let key in playOneCount) {
		if(playOneCount[key] > 0) {
			if(playOneCount[key] == 1) {
				playerOneHigh = key
				playerOneStraight++
			}
			if(playOneCount[key] == 2) {
				playerOne += pair;
				playerOneHigh = key
			}
			if(playOneCount[key] == 3) {
				playerOne += three;
				playerOneHigh = key
			}
			if(playerOne === 5) {
				playerOne ++;
				playOneHigh = key
			}
			if(playOneCount[key] == 4) {
				playerOne += four;
				playerOneHigh = key
			}
			if(playerOneStraight == 4) {
				playerOne += straight;
				playerOneHigh = key
			}
		} else {
			playerOneStraight = 0
		}
	}
	
	for(let key in playTwoCount) {
		if(playTwoCount[key] > 0) {
			if(playTwoCount[key] == 1) {
				playerTwoHigh = key
				playerTwoStraight++
			}
			if(playTwoCount[key] == 2) {
				playerTwo += pair;
				playerTwoHigh = key;
			}
			if(playTwoCount[key] == 3) {
				playerTwo += three;
				playerTwoHigh = key;
			}
			if(playerTwo === 5) {
				playerTwo ++;
				playerTwoHigh = key;
			}
			if(playTwoCount[key] == 4) {
				playerTwo += four;
				playerTwoHigh = key;
			}
			if(playerTwoStraight == 4) {
				playerTwo += straight;
				playerTwoHigh = key;
			}
			playerTwoStraight ++
		} else {
			playerTwoStraight = 0
		}
	}
	
	
	winner = playerOne > playerTwo ? 'Player 1 wins' : 'Player 2 Wins'
	
	return winner
}

module.exports = poker;
