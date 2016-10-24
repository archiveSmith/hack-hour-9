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
	
	let player1Hand = populateHand(hand1);
	let player2Hand = populateHand(hand2);
	

	console.log(player1Hand)
	console.log(player2Hand)
	//handle high card
	let highestCard = 0;
	//iterate over p1 hands to find highestCard with 1 value
	for(let card in player1Hand) {
		if(player1Hand[card] === 1 && card > highestCard) {
			highestCard = card;
		}
	}
	for(let card in player2Hand) {
		if(player2Hand[card] === 1 && card > highestCard) {
			highestCard = card;
		}
	}
	
	console.log(highestCard)
	
}

function populateHand(arr) {
	let hand = {};
	let length = arr.length;
	for(var i = 0; i < length; i++) {
		if(!hand[arr[i]]) {
			hand[arr[i]] = 1;
		} else {
			hand[arr[i]]++;
		}
	}
	return hand;
}

poker([1,2,3,4,5], [4,5,8,9,10])

module.exports = poker;
