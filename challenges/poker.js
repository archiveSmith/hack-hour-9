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
	function findDupes(arr){
		//loop through array and create an object with its frequency
		var dupes = {};
		for (var m = 0; m < arr.length; m++){
			dupes[arr[m]] ? dupes[arr[m]]++ : dupes[arr[m]] = 1;
		}
		return dupes;
	}
	function isItStraight(arr){
		var sorted = arr.sort(function(a,b){
				return a - b;
			});
		for (var j = 0; j < sorted.length-1; j++){
			if (Math.abs(sorted[j] - sorted[j+1]) !== 1){
				return false;
			}
		}
		return true;
	}
	//findDupes of each arr
	var dupes1 = findDupes(hand1);
	var dupes2 = findDupes(hand2);
	var totals1 = [];
	var totals2 = [];
	for (var key1 in dupes1){
		totals1.push(dupes1[key1]);
	}
	// console.log('totals1:', totals1);
	for (var key2 in dupes2){
		totals2.push(dupes2[key2]);
	}
	// console.log('totals2:', totals2);
	//if there are no dupes, run isItStraight
	//test win cases and do points
	//greater points wins
	// console.log(findDupes([5,5,6,3,4]));
	var outcomes = [];
	outcomes.push(totals1, totals2);
	// console.log('outcomes:', outcomes);
	var scores = {};
	for (var i = 0; i < outcomes.length; i++){
		if(outcomes[i].includes(4)){
			scores[outcomes[i]] = 6;
			console.log('four of a kind: ', outcomes[i]);
		} else if (outcomes[i].includes(3)){
			//if it also contains 2, it's a full house (score: 5)
			if(outcomes[i].includes(2)){
				scores[outcomes[i]] = 5;
			} else {
				//if it also contains a 1, it's a 3 of a kind (score: 3)
				scores[outcomes[i]] = 3;
			}
			
			
		} else if (outcomes[i].includes(2)){
			//if it contains 2 sets of 2, it's a pair (score: 2)
			scores[outcomes[i]] = 2;
		} else if(isItStraight(outcomes[i])){
			//it's a straight (score: 4)
			scores[outcomes[i]] = 4;
		} else {
			//high card (score: 1)
			scores[outcomes[i]] = 1;
		}
	}
	// console.log('scores:', scores);
	if(scores[totals1] === scores[totals2]){
		//break the tie. if unable to break the tie, return draw
		return "Draw"
	} else if(scores[totals1] > scores[totals2]){
		return "Player 1 wins";
	} else {
		return "Player 2 wins";
	}
}

module.exports = poker;
