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
	let handOneObj = {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0, "13":0, '14': 0, "hand":null};
	let handTwoObj = {"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0, "13":0, '14': 0, "hand":null};

	// Four of a kind = 0
	// full house = 1 
	// straight = 2 
	// 3-of-a-kind = 3
	// 2-pair = 4 
	// 1-pair = 5 
	// high card = 6

	for (let i = 0; i < 5; i++){
		handOneObj[hand1[i]]++;
	
		if(handOneObj[hand1[i]] === 3){
			handOneObj.hand = 3;
		}
		
		if(handOneObj[hand1[i]] === 4){
			handOneObj.hand = 0;
		}
		
	}
	
	
	return handOneObj;
}

module.exports = poker;
